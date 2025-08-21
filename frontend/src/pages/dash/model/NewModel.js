import React, { Fragment, useState } from "react";

import store from "../../../app/store";
import { connect } from "react-redux";
import { getForeignKeys, createModel } from "../../../app/actions/Model";
import { Navigate } from "react-router-dom";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

class NewModel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableName: null,
      isDraft: false,
      fields: {},
      hasFields: null,
      errors: [],
    };

    this.row = this.row.bind(this);
    this.submit = this.submit.bind(this);
    this.addRow = this.addRow.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onRemoveBtnClick = this.onRemoveBtnClick.bind(this);
  }

  componentDidMount() {
    this.props.getForeignKeys();
  }

  // [name, type, default, verbose, null, blank, editable, Unique, pk]
  row = (id, onInputChange) => {
    const foreignKeys = [];
    this.props.payload.foreignKeys.map((key) => {
      foreignKeys.push(key + ".id-" + "1_" + id);
    });
    return this.state.fields[parseInt(id)] ? (
      <Fragment key={id}>
        <div className="flex flex-wrap gap-x-4">
          <div>
            <label className="block text-xs mb-1">Name</label>
            <input
              name={"0_" + id}
              className={`input py-1 mb-4 ${
                this.state.errors.includes("0_" + id)
                  ? "red-ring"
                  : ""
              }`}
              onChange={onInputChange}
            />
          </div>

          <div>
            <label className="block text-xs mb-1">Type</label>
            <ComboBox
              className={`input py-1 ${
                this.state.errors.includes("1_" + id)
                  ? "red-ring"
                  : ""
              }`}
              options={[
                "",
                "UUIDField" + "-" + "1_" + id,
                ...foreignKeys,
                "CharField" + "-" + "1_" + id,
                "BooleanField" + "-" + "1_" + id,
                "EmailField" + "-" + "1_" + id,
                "DateTimeField" + "-" + "1_" + id,
                "JSONField" + "-" + "1_" + id,
                "ImageField" + "-" + "1_" + id,
                // "TextField" + "-" + "1_" + id,
                // "DecimalField" + "-" + "1_" + id,
                // "IntegerField" + "-" + "1_" + id,
                // "FileField" + "-" + "1_" + id,
              ]}
              name={"1_" + id}
              onChange={onInputChange}
            />
          </div>

          {this.state.fields[parseInt(id)][1] !== null &&
          this.state.fields[parseInt(id)][8] === false ? (
            <div>
              <label className="block text-xs mb-1">
                {this.state.fields[parseInt(id)][1] === "ImageField"
                  ? "Upload To"
                  : "Default"}
              </label>
              <input
                name={"2_" + id}
                className="input py-1 mb-4"
                onChange={onInputChange}
              />
            </div>
          ) : this.state.fields[parseInt(id)][1] === "ImageField" ? (
            <div>
              <label className="block text-xs mb-1">Upload To</label>
              <input
                name={"2_" + id}
                className="input py-1 mb-4"
                onChange={onInputChange}
              />
            </div>
          ) : (
            <div>
              <label className="block text-xs mb-1 h-4"></label>
              <input
                className="py-1 px-4 border text-sm mb-4 rounded-lg bg-[#eee]"
                disabled
              />
            </div>
          )}

          <div>
            <label className="block text-xs mb-1">Verbose</label>
            <input
              name={"3_" + id}
              className="input py-1 mb-4"
              onChange={onInputChange}
            />
          </div>
        </div>

        <ul className="ks-cboxtags">
          <li>
            <input
              type="checkbox"
              id={"checkboxOne_4_" + id}
              name={"4_" + id}
              onChange={onInputChange}
            />
            <label for={"checkboxOne_4_" + id}>Null</label>
          </li>
          <li>
            <input
              name={"5_" + id}
              type="checkbox"
              id={"checkboxTwo_5_" + id}
              onChange={onInputChange}
            />
            <label for={"checkboxTwo_5_" + id}>Blank</label>
          </li>
          <li>
            <input
              name={"6_" + id}
              type="checkbox"
              id={"checkboxThree_6_" + id}
              defaultChecked={true}
              onChange={onInputChange}
            />
            <label for={"checkboxThree_6_" + id}>Editable</label>
          </li>
          <li>
            <input
              name={"7_" + id}
              type="checkbox"
              id={"checkboxFour_7_" + id}
              onChange={onInputChange}
            />
            <label for={"checkboxFour_7_" + id}>Unique</label>
          </li>
          <li>
            <input
              name={"8_" + id}
              type="checkbox"
              id={"checkboxFour_8_" + id}
              onChange={onInputChange}
            />
            <label for={"checkboxFour_8_" + id}>PK</label>
          </li>
        </ul>
        <div className="text-red-500 text-xs text-right">
          <button id={id} onClick={this.onRemoveBtnClick}>
            remove
          </button>
        </div>
        <hr className="my-6" />
      </Fragment>
    ) : null;
  };

  addRow = () => {
    this.setState({
      fields: {
        ...this.state.fields,
        [Object.keys(this.state.fields).length]: [
          null,
          null,
          null,
          null,
          false,
          false,
          true,
          false,
          false,
        ],
      },
      hasFields: true,
    });
  };

  onInputChange = (e) => {
    if (e.target.name === "tableName") {
      let errs = this.state.errors;
      if (errs.includes(e.target.name)) {
        let i = errs.indexOf(e.target.name);
        errs.splice(i, 1);
      }
      this.setState({ tableName: e.target.value, errors: errs });
      return;
    }
    const field = (val) => {
      let id = e.target.name.split("_")[1];
      let name = e.target.name.split("_")[0];

      let i = this.state.fields[parseInt(id)];
      i[parseInt(name)] = val;
      this.setState({ fields: { ...this.state.fields, [parseInt(id)]: i } });

      let errs = this.state.errors;
      if (this.state.errors.includes(e.target.name)) {
        let i = errs.indexOf(e.target.name);
        errs.splice(i, 1);
      }
      if (this.state.errors.includes(e.target.name)) {
        let i = errs.indexOf(e.target.name);
        errs.splice(i, 1);
      }
      this.setState({ errors: errs });
      return;
    };
    if (e.target.checked) {
      let val = e.target.checked ? true : false;
      field(val);
    } else {
      let val = e.target.value;
      if (val === "on") {
        field(false);
      } else {
        field(val);
      }
    }
  };

  onRemoveBtnClick = (e) => {
    let fields = this.state.fields
    let errors = this.state.errors;
    if (errors.includes("0_" + parseInt(e.target.id))) {
      let err = errors;
      let i = err.indexOf("0_" + parseInt(e.target.id));
      err.splice(i, 1);
      errors = err;
    }
    if (errors.includes("1_" + parseInt(e.target.id))) {
      let err = errors;
      let i = err.indexOf("1_" + parseInt(e.target.id));
      err.splice(i, 1);
      errors = err;
    }
    delete fields[parseInt(e.target.id)];
    this.setState({
      fields: fields,
      errors: errors,
    });
  };

  submit = (e) => {
    const isEmpty = (el) => {
      return (typeof el === "string" && el.trim() === "") || el === null;
    };

    let errors = this.state.errors;
    let hasFields = this.state.hasFields !== null ? Object.keys(this.state.fields).length !== 0 ? true : false : false

    if (isEmpty(this.state.tableName)) {
      this.setState({ errors: [...errors, "tableName"], hasFields: hasFields });
      return;
    } else {
      if (errors.includes(this.state.tableName)) {
        let errs = errors;
        let i = errs.indexOf("tableName");
        errs.splice(i, 1);
        errors = errs;
        this.setState({ errors: errors, hasFields: hasFields });
        return;
      }
    }

    Object.keys(this.state.fields).map((key) => {
      if (
        this.state.fields[parseInt(key)] !== undefined
      ) {
        if (isEmpty(this.state.fields[parseInt(key)][0]) && !errors.includes("0_" + key)) {
          errors = ["0_" + key, ...errors];
        }
        if (isEmpty(this.state.fields[parseInt(key)][1]) && !errors.includes("1_" + key)) {
          errors = ["1_" + key, ...errors];
        }
      } else {
        if (errors.includes("0_" + key)) {
          let errs = errors;
          let i = errs.indexOf("0_" + key);
          errs.splice(i, 1);
          errors = errs;
        }
        if (errors.includes("1_" + key)) {
          let errs = errors;
          let i = errs.indexOf("1_" + key);
          errs.splice(i, 1);
          errors = errs;
        }
      }
    });
    this.setState({ errors: errors, hasFields: hasFields });

    if (errors.length === 0 && hasFields === true) {
      this.props.createModel(this.state);
    }
    return;
  };

  render() {
    if (this.props.redirectTo) {
      return <Navigate replace to={this.props.redirectTo} />;
    } else {
      return this.props.payload !== undefined ? (
        <div className="flex flex-col min-h-screen pl-8 mx-auto">
          {this.props.helmet}
          <div className="mt-16">
            <div className="card">
              <div className="card-content flex-col">
                <div className="block mb-2">
                  <p className="text-sm font-light">Table Name</p>
                </div>

                <div className="flex flex-col mb-4">
                  <input
                    className={`input ${
                      this.state.errors.includes("tableName") ? "red-ring" : ""
                    }`}
                    name="tableName"
                    onChange={this.onInputChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-content flex-col border-b-0">
              <div className="block mb-2">
                <p
                  className={`text-sm font-light ${
                    this.state.hasFields === false ? "text-[red]" : ""
                  }`}
                >
                  Fields
                </p>
                <hr className="mt-2 mb-6" />
              </div>

              {this.state.fields && Object.keys(this.state.fields).map((key) =>
                    this.state.fields[key]
                      ? this.row(key, this.onInputChange)
                      : null
                  )}

              <div className="float-right">
                <button
                  className="signal add relative h-5 w-5 ml-auto block bg-[#00bfff] rounded-full text-white shadow-md border-color-white hover:border"
                  onClick={this.addRow}
                  name="__name__"
                ></button>
              </div>
            </div>
          </div>

          {/* submit  */}
          <div className="mr-auto mb-20">
            <button onClick={this.submit} className="custom-btn btn-3">
              <span>Create Model</span>
            </button>
          </div>
        </div>
      ) : null;
    }
  }
}

function ComboBox({ name, onChange, options, defaultValue, ...props }) {
  const [selected, setSelected] = useState(
    defaultValue || options[0].split("-")[0]
  );
  const change = (e) => {
    setSelected(e.split("-")[0]);
    onChange({ target: { name: e.split("-")[1], value: e.split("-")[0] } });
  };

  return (
    <Combobox name={name} onChange={change} value={selected}>
      <div className="relative w-[175px]">
        <div
          className="relative text-xs w-full h-full cursor-default overflow-hidden rounded-lg border bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#00bfff]"
          {...props}
        >
          <Combobox.Input className="w-full border-none text-gray-900 focus:ring-0" />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <SelectorIcon className="h-4 w-4 text-gray-400" />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Combobox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option) =>
              option !== "" ? (
                <Combobox.Option
                  key={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-4 pr-4 ${
                      active ? "bg-[#00bfff] text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.split("-")[0]}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-[#00bfff]"
                          }`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ) : null
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}

const mapStateToProps = (state) => ({
  payload: store.getState().modelReducer,
  redirectTo: store.getState().modelReducer.redirectTo,
});

export default connect(mapStateToProps, {
  createModel,
  getForeignKeys,
})(NewModel);
