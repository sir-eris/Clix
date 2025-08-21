import React from "react";
import store from "../../app/store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { retrieveFAQs, askFAQ } from "../../app/actions/Auth";

class FAQ extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      questionError: false,
    };

    this.askQuestion = this.askQuestion.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    this.props.retrieveFAQs();
  }

  onInputChange (e) {
    if (this.state.questionError) {
      this.setState({ questionError: false });
    }
    this.setState({ question: e.target.value });
  }

  askQuestion() {
    const q = this.state.question;

    const isEmpty = (el) => {
      return (
        (typeof el === "string" && el.trim() === "") ||
        el === null ||
        el === undefined
      );
    };

    if (isEmpty(q)) {
      this.setState({ questionError: true });
      return;
    }

    this.props.askFAQ(q);
    this.setState({ question: "" });
    return;
  }

  render() {
    return (
      <>
        {this.props.helmet}
        <main className="mt-8 lg:mt-12">
          <div className="h-[70vh] w-full shadow-inner">
            <div className="w-full h-3/5 flex flex-col justify-start items-center pt-36">
              FAQ
              {this.props.askFaq === true ? (
                <small className="mt-10 block text-[#4BFB80] w-fit text-center mx-auto px-6 drop- py-2 rounded-full border-[#4BFB80] shadow-md ring-[#fff] ring-1 border-2 mb-6">
                  Thanks for asking. You'll be notified once responded.
                </small>
              ) : null}
            </div>
            <div className="w-full h-2/5 flex justify-center items-center gap-x-8">
              <input
                onChange={this.onInputChange}
                value={this.state.question}
                className={`input py-2 w-1/2 placeholder:text-sm ${
                  this.state.questionError === true ? "red-ring" : ""
                }`}
                placeholder="Search for a question or ask a new one..."
              />
            </div>
          </div>
          <div className="w-full mx-auto">
            {this.props.faqs
              ? this.props.faqs.map((faq) => (
                  <>
                    <div className="w-full flex justify-center">
                      <div className="w-1/5 p-8 pt-16">
                        <h2 className="text-right font-extralight text-2xl">
                          {faq.question}
                        </h2>
                      </div>
                      <div className="w-1/3 pb-8 pt-16 px-12 border-x">
                        <p>{faq.answer}</p>
                      </div>
                      <div className="w-1/5 p-8 pt-16"></div>
                    </div>
                    <hr className="my-0 mx-56" />
                  </>
                ))
              : null}
            <div className="text-center mb-10">
              <button
                onClick={this.askQuestion}
                className="text-[#00BFFF] text-xsm text-center"
              >
                Ask a Question
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  faqs: store.getState().authReducer.faqs,
  askFaq: store.getState().authReducer.askFAQ,
});

export default connect(mapStateToProps, {
  askFAQ,
  retrieveFAQs,
})(FAQ);
