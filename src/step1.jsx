import Buttons from "./buttons";
import { Base, StepHeader } from "./components";
import { SimpleForm } from "./forms";

export default function Step1() {
  return (
    <>
      <Base>
        <div className="flex flex-col min-h-screen">
          <main className="flex flex-grow flex-col gap-3 px-3.5 pb-5">
            <StepHeader num="1" title="Create your account" />
            <div className="flex flex-grow flex-col gap-8">
              <SimpleForm title="Name" type="text" />
              <SimpleForm title="Email" type="text" />
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
                <Buttons variant="blue" size="lg" text="Post" />
              </a>
            </div>
          </main>
        </div>
      </Base>
    </>
  );
}
