import React, { Component, useState, Fragment } from "react";

import store from "../../../app/store";
import { connect } from "react-redux";
import { retrieveModel, updateModel } from "../../../app/actions/Model";
import { Navigate, useLocation } from "react-router-dom";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

class EditModel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableName: null,
      isDraft: false,
      fields: null,
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
    this.props.retrieveModel(this.props.location.state.id);
  }

  // The naming of each row follows name="[name]_[id]"
  // where [name] indexes [EMPTY_FOR_FIELD_ID, name, type, null, blank, editable, Unique, pk, default, verbose]
  row = (id) => {
    let name, type, verbose, def, isNull, isBlank, isEditable, isUnique, isPK;
    if (this.state.fields[id]) {
      let field = this.state.fields[id];
      name = field[1];
      type = field[2];
      verbose = field[3];
      def = field[4];
      isNull = field[5];
      isBlank = field[6];
      isEditable = field[7];
      isUnique = field[8];
      isPK = field[9];
    } else {
      name = null;
      type = null;
      verbose = null;
      def = null;
      isNull = false;
      isBlank = false;
      isEditable = true;
      isUnique = false;
      isPK = false;
    }
    const foreignKeys = [];
    this.state.foreignKeys.map(key => {
      if (key !== this.state.tableName) {foreignKeys.push(key + ".id-" + "2_" + id)}
    })
    return (
      <Fragment key={id}>
        <div className="flex gap-x-4">
          <span>
            <label className="block text-xs mb-1">Name</label>
            <input
              name={"1_" + id}
              className={`input py-1 mb-4 ${
                this.state.errors.includes("1_" + id)
                  ? "red-ring"
                  : null
              }`}
              defaultValue={name}
              onChange={this.onInputChange}
            />
          </span>

          <span>
            <label className="block text-xs mb-1">Type</label>
            <ComboBox
              className={`input py-1 ${
                this.state.errors.includes("2_" + id)
                  ? "red-ring"
                  : null
              }`}
              options={[
                "",
                "UUIDField" + "-" + "2_" + id,
                ...foreignKeys,
                "CharField" + "-" + "2_" + id,
                "BooleanField" + "-" + "2_" + id,
                "EmailField" + "-" + "2_" + id,
                "DateTimeField" + "-" + "2_" + id,
                "ImageField" + "-" + "2_" + id,
                "JSONField" + "-" + "2_" + id,
                // "TextField" + "-" + "2_" + id,
                // "DecimalField" + "-" + "2_" + id,
                // "IntegerField" + "-" + "2_" + id,
                // "FileField" + "-" + "2_" + id,
              ]}
              name={"2_" + id}
              defaultValue={type}
              onChange={this.onInputChange}
            />
          </span>

          {this.state.fields[parseInt(id)][2] !== null &&
          this.state.fields[parseInt(id)][9] === false ? (
            <span>
              <label className="block text-xs mb-1">
                {this.state.fields[parseInt(id)][2] === "ImageField"
                  ? "Upload To"
                  : "Default"}
              </label>
              <input
                name={"3_" + id}
                defaultValue={def}
                className="input py-1 mb-4"
                onChange={this.onInputChange}
              />
            </span>
          ) : (
            <span>
              <label className="block text-xs mb-1 h-4"></label>
              <input
                className="py-1 px-4 border text-sm mb-4 rounded-lg bg-[#eee]"
                value=""
                disabled
              />
            </span>
          )}

          <span>
            <label className="block text-xs mb-1">Verbose</label>
            <input
              name={"4_" + id}
              defaultValue={verbose}
              className="input py-1 mb-4"
              onChange={this.onInputChange}
            />
          </span>
        </div>

        <ul className="ks-cboxtags">
          <li>
            <input
              name={"5_" + id}
              type="checkbox"
              id={"checkboxOne_4_" + id}
              defaultChecked={isNull}
              onChange={this.onInputChange}
            />
            <label for={"checkboxOne_4_" + id}>Null</label>
          </li>
          <li>
            <input
              name={"6_" + id}
              type="checkbox"
              id={"checkboxTwo_5_" + id}
              defaultChecked={isBlank}
              onChange={this.onInputChange}
            />
            <label for={"checkboxTwo_5_" + id}>Blank</label>
          </li>
          <li>
            <input
              name={"7_" + id}
              type="checkbox"
              id={"checkboxThree_6_" + id}
              defaultChecked={isEditable}
              onChange={this.onInputChange}
            />
            <label for={"checkboxThree_6_" + id}>Editable</label>
          </li>
          <li>
            <input
              name={"8_" + id}
              type="checkbox"
              id={"checkboxFour_7_" + id}
              defaultChecked={isUnique}
              onChange={this.onInputChange}
            />
            <label for={"checkboxFour_7_" + id}>Unique</label>
          </li>
          <li>
            <input
              name={"9_" + id}
              type="checkbox"
              id={"checkboxFour_8_" + id}
              defaultChecked={isPK}
              onChange={this.onInputChange}
            />
            <label for={"checkboxFour_8_" + id}>PK</label>
          </li>
        </ul>

        <div className="text-red-500 text-right text-xs">
          <button id={id} onClick={this.onRemoveBtnClick}>
            remove
          </button>
        </div>
        <hr className="my-6" />
      </Fragment>
    );
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

  onRemoveBtnClick = (e) => {
    let fields = this.state.fields;
    let errors = this.state.errors;
    if (errors.includes("1_" + parseInt(e.target.id))) {
      let err = errors
      let i = err.indexOf("1_" + parseInt(e.target.id));
      err.splice(i, 1);
      errors = err;
    }
    if (errors.includes("2_" + parseInt(e.target.id))) {
      let err = errors;
      let i = err.indexOf("2_" + parseInt(e.target.id));
      err.splice(i, 1);
      errors = err;
    }
    delete fields[parseInt(e.target.id)];
    
    this.setState({
      fields: fields,
      errors: errors,
    });
  }

  onInputChange = (e) => {
    const isEmpty =(el) => {
      return (typeof el === 'string' && el.trim() === '') || el === null || el === undefined
    }

    if (e.target.name === "tableName") {
      let err = this.state.errors
      if (
        !isEmpty(e.target.value) &&
        err.includes("tableName")
      ) {
        let er = err
        let i = er.indexOf("tableName")
        er.splice(i, 1);
        err = er
      }
      this.setState({ tableName: e.target.value, errors: err });
      return
    }

    if (e.target && e.target.name.split("_").length > 2) {
      let id = e.target.name.split("_")[1];
      let name = e.target.name.split("_")[0];
      let errors = this.state.errors

      let arr = [];
      Object.keys(this.state.fields[id]).forEach((key) => {
        arr.push(this.state.fields[id][key]);
      });
      arr[parseInt(name)] = e.target.value;
      
      if (!isEmpty(e.target.value) && errors.includes(e.target.name)) {
        let err = errors
        let i = err.indexOf(e.target.name)
        err.splice(i, 1)
        errors = err
      }
        this.setState({
          fields: { ...this.state.fields, [id + "_"]: arr, errors: errors },
        });
    } else {
      let errors = this.state.errors
      const field = (val) => {
        let id = e.target.name.split("_")[1];
        let name = e.target.name.split("_")[0];
        
        let s = this.state.fields[parseInt(id)]
        s[parseInt(name)] = val;

        if (!isEmpty(val) && errors.includes(e.target.name)) {
          let err = errors;
          let i = err.indexOf(e.target.name);
          err.splice(i, 1);
          errors = err;
        }
        this.setState({
          fields: { ...this.state.fields, [parseInt(id)]: s },
          errors: errors,
        });
        return
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
    }
  };

  submit = (e) => {
    const isEmpty = (el) => {
      return (
        (typeof el === "string" && el.trim() === "") ||
        el === null ||
        el === undefined
      );
    };

    let errors = this.state.errors;
    let hasFields = this.state.hasFields !== null ? Object.keys(this.state.fields).length !== 0 ? true : false : false

    let keys = Object.keys(this.state.fields).filter(
      (key) => this.state.fields[key] !== undefined
    );

    keys.map((key) => {
      if (isEmpty(this.state.fields[key][1])) {
        errors.push("1_" + key);
      }
      if (isEmpty(this.state.fields[key][2])) {
        errors.push("2_" + key);
      }
    });
    
    let fields = {};
    for (let i = 0; i < keys.length; i++) {
      fields[i] = this.state.fields[keys[i]];
    }

    if (
      isEmpty(this.state.tableName) &&
      !errors.includes("tableName")
    ) {
      errors.push("tableName")
    }
    this.setState({ errors: errors, hasFields: hasFields });
    
    if (errors.length === 0 && hasFields === true) {
      this.props.updateModel({
        modelId: this.props.model.id,
        name: this.state.tableName,
        is_draft: this.state.isDraft,
        fields: fields,
      });
    }
    return
  };

  render() {
    if (this.props.redirectTo) {
      return <Navigate replace to={this.props.redirectTo} />;
    }

    if (this.props.model !== undefined && this.state.fields === null) {
      this.setState({
        tableName: this.props.model.name,
        fields: this.props.model.fields,
        foreignKeys: this.props.model.foreign_keys,
      });
    }

    if (this.props.model !== undefined) {
      return (
        <div className="flex flex-col min-h-screen pl-8 mx-auto">
          {this.props.helmet}
          <div className="mt-16">
            <div className="card">
              <div className="card-content flex-col">
                <div className="block mb-2">
                  <p className="text-sm font-light">Name</p>
                </div>

                <div className="flex flex-col mb-4">
                  <input
                    className={`input ${
                      this.state.errors.includes("tableName") ? "red-ring" : ""
                    }`}
                    name="tableName"
                    defaultValue={this.props.model.name}
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

              {this.state.fields !== null
                ? Object.keys(this.state.fields).map((key) =>
                    this.state.fields[key] ? this.row(key) : null
                  )
                : null}

              <div className="">
                <button
                  name="__name__"
                  onClick={this.addRow}
                  className="signal add relative h-5 w-5 ml-auto block bg-[#00bfff] rounded-full text-white shadow-md border-color-white hover:border"
                ></button>
              </div>
            </div>
          </div>

          {/* submit  */}
          <div className="ml-auto grid text-center mb-20">
            <button onClick={this.submit} className="custom-btn btn-3">
              <span>Update Model</span>
            </button>
          </div>
        </div>
      );
    } else return null
  }
}

function ComboBox({ name, onChange, options, defaultValue, ...props }) {
  const [selected, setSelected] = useState(defaultValue || options[0].split("-")[0]);
  const change = (e) => {
    setSelected(e.split("-")[0]);
    onChange({ target: { name: name, value: e.split('-')[0] } });
  };

  return (
    <Combobox name={name} onChange={change} value={selected}>
      <div className="relative">
        <div
          className="relative text-xs w-full h-full cursor-default overflow-hidden rounded-lg border bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#00bfff]"
          {...props}
        >
          <Combobox.Input
            className="w-full border-none text-gray-900 focus:ring-0"
          />
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
          <Combobox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option) => (
              <Combobox.Option
                key={option}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
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
                    {active ? (
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
            ))}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}

const WrappedComponent = (props) => {
  const location = useLocation();

  return location.state ? (
    <EditModel location={location} {...props} />
  ) : (
    <Navigate replace to="/models" />
  );
};

const mapStateToProps = (state) => ({
  model: store.getState().modelReducer.editing,
  redirectTo: store.getState().modelReducer.redirectTo,
});

export default connect(mapStateToProps, {
  retrieveModel,
  updateModel,
})(WrappedComponent);
