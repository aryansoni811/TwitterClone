export default function Step1() {
  return (
    <>
      <div className="flex min-h-screen min-w-full flex-col bg-neutral-1000 font-inter text-neutral-50">
        <main className="flex flex-grow flex-col gap-3 px-3.5 pb-5">
          <header className="flex items-center gap-5 py-3">
            <a href="../src/index.html">
              <button>
                <img src="../public/images/cancel.svg" alt="cancel" />
              </button>
            </a>
            <h4 className="text-sm2 font-bold">Step 1 of 4</h4>
          </header>
          <h3 className="pb-2 text-2xl font-bold">Create your account</h3>
          <div className="flex flex-grow flex-col gap-8">
            <div className="group w-full rounded border border-solid border-neutral-500 caret-twitter-blue focus-within:border-twitter-blue">
              <legend className="absolute -mt-2 ml-3 bg-black px-1 text-xs text-neutral-500 group-focus-within:text-twitter-blue">
                Name
              </legend>
              <div className="flex justify-between px-2 py-3">
                <input
                  className="w-full bg-transparent focus:outline-none"
                  type="text"
                  name="Name"
                  id="name"
                  placeholder="Enter Your Name"
                />
                <img
                  className="hidden text-end group-focus-within:inline"
                  src="../public/images/correct.svg"
                  alt="correct"
                  width={20}
                />
              </div>
            </div>
            <div className="group w-full rounded border border-solid border-neutral-500 caret-twitter-blue focus-within:border-twitter-blue">
              <legend className="absolute -mt-2 ml-3 bg-black px-1 text-xs text-neutral-500 group-focus-within:text-twitter-blue">
                Email
              </legend>
              <div className="flex justify-between px-2 py-3">
                <input
                  className="w-full bg-transparent focus:outline-none"
                  type="text"
                  name="Email"
                  id="email"
                  placeholder="Enter Your Email"
                />
                <img
                  className="hidden text-end group-focus-within:inline"
                  src="../public/images/correct.svg"
                  alt="correct"
                  width={20}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-sm2 font-bold">Date of birth</h5>
              <p className="text-sm">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
            </div>
            <div className="grid grid-cols-[2fr_1fr_1fr] gap-3">
              <div className="group rounded border border-solid border-neutral-500 caret-twitter-blue focus-within:border-twitter-blue">
                <legend className="absolute -mt-2 ml-3 bg-black px-1 text-xs text-neutral-500 group-focus-within:text-twitter-blue">
                  Month
                </legend>
                <select
                  className="bg-black px-2 py-3 focus:outline-none"
                  type="text"
                  name="Month"
                  id="month"
                >
                  <option>--</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </select>
              </div>
              <div className="group rounded border border-solid border-neutral-500 caret-twitter-blue focus-within:border-twitter-blue">
                <legend className="absolute -mt-2 ml-3 bg-black px-1 text-xs text-neutral-500 group-focus-within:text-twitter-blue">
                  Day
                </legend>
                <select
                  className="flex justify-between bg-black px-2 py-3 focus:outline-none"
                  type="text"
                  name="Day"
                  id="day"
                >
                  <option>--</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                </select>
              </div>
              <div className="group rounded border border-solid border-neutral-500 caret-twitter-blue focus-within:border-twitter-blue">
                <legend className="absolute -mt-2 ml-3 bg-black px-1 text-xs text-neutral-500 group-focus-within:text-twitter-blue">
                  Year
                </legend>
                <select
                  className="bg-black px-2 py-3 focus:outline-none"
                  type="text"
                  name="Year"
                  id="year"
                >
                  <option>--</option>
                  <option>2000</option>
                  <option>2001</option>
                  <option>2002</option>
                  <option>2003</option>
                  <option>2004</option>
                  <option>2005</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-auto">
            <a href="../src/step2.html">
              <button className="blue-btn w-full px-5 py-2">Post</button>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
