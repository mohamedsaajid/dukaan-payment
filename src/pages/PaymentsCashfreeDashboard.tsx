import { FunctionComponent } from "react";

const PaymentsCashfreeDashboard: FunctionComponent = () => {
  return (
    <div className="relative bg-black-98 w-full h-[1482px] overflow-hidden text-left text-xl text-black-12 font-caption-regular">
      <div className="absolute top-[0px] left-[224px] bg-black-100 box-border w-[1216px] flex flex-row items-center justify-start py-3 px-8 gap-[16px] border-b-[1px] border-solid border-black-85">
        <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
          <div className="overflow-hidden flex flex-row items-center justify-start">
            <div className="relative leading-[28px] font-medium">Payments</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[6px] text-xs text-black-30">
            <img
              className="relative w-3.5 h-3.5 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/outlined--help@2x.png"
            />
            <div className="relative leading-[16px]">How it works</div>
          </div>
        </div>
        <div className="self-stretch rounded-md bg-black-95 w-[400px] flex flex-row items-center justify-start py-[9px] px-4 box-border gap-[8px] text-mini text-black-50">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/iconssearch@2x.png"
          />
          <div className="relative leading-[22px]">
            Search features, tutorials, etc.
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-end">
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <img
              className="relative w-10 h-10 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/icons--menu@2x.png"
            />
            <img
              className="relative w-10 h-10 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/icons--menu@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[96px] left-[calc(50%_-_464px)] w-[1152px] flex flex-col items-start justify-start gap-[32px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative leading-[28px] font-medium">
                Overview
              </div>
              <div className="flex flex-row items-center justify-start text-base text-black-30">
                <div className="relative w-[137px] h-9">
                  <div className="absolute top-[0px] left-[0px] rounded bg-black-100 box-border w-[137px] h-9 border-[1px] border-solid border-black-85" />
                  <div className="absolute top-[6px] left-[14px] leading-[24px]">
                    Last Month
                  </div>
                  <img
                    className="absolute top-[10px] left-[107px] w-4 h-4 overflow-hidden object-cover"
                    alt=""
                    src="/iconsarrow@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="hidden flex-row items-start justify-start gap-[12px] text-sm text-black-100 font-body-1-medium">
              <div className="rounded-21xl bg-primary-blue flex flex-row items-center justify-start py-1.5 px-4 gap-[6px]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
                  alt=""
                />
                <div className="relative leading-[20px] font-medium">
                  Razorpay
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
                  alt=""
                />
              </div>
              <div className="rounded-21xl bg-black-90 flex flex-row items-center justify-start py-1.5 px-4 gap-[10px] text-black-50">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 object-cover hidden"
                  alt=""
                />
                <div className="relative leading-[20px] font-medium">{`COD orders (Dukaan Delivery) `}</div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 object-cover hidden"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-base text-black-30">
            <div className="flex-1 flex flex-row items-center justify-center">
              <div className="flex-1 rounded-spacing-spacing-04 bg-black-100 shadow-[0px_2px_6px_rgba(26,_24,_30,_0.04)] flex flex-col items-start justify-start p-5">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative leading-[24px]">Online orders</div>
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
                      alt=""
                    />
                  </div>
                  <div className="relative text-13xl leading-[38px] font-medium text-black-12">
                    231
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-spacing-spacing-04 bg-black-100 shadow-[0px_2px_6px_rgba(26,_24,_30,_0.04)] flex flex-col items-start justify-start p-5">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative leading-[24px]">Amount received</div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
                    alt=""
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-13xl text-black-12">
                  <div className="flex-1 flex flex-row items-center justify-between">
                    <div className="relative leading-[38px] font-medium">
                      ₹23,92,312.19
                    </div>
                    <div className="hidden flex-row items-start justify-start text-sm text-primary-blue">
                      <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                        View 23 orders
                      </div>
                    </div>
                  </div>
                  <div className="hidden flex-row items-center justify-start text-base text-primary-blue">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative [text-decoration:underline] leading-[24px] font-medium">
                        3,231 orders
                      </div>
                    </div>
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="relative leading-[28px] font-medium">
            Transactions | This Month
          </div>
          <div className="self-stretch rounded bg-black-98 hidden flex-row items-center justify-center py-2 px-4 gap-[8px] text-smi text-black-30 font-body-1-medium border-[1px] border-solid border-black-85">
            <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                alt=""
              />
              <div className="relative leading-[16px] font-medium">
                Payouts for the orders that are processed by Cashfree Payments.
              </div>
            </div>
            <div className="hidden flex-row items-center justify-end gap-[8px] text-sm font-caption-regular">
              <div className="flex flex-row items-start justify-start">
                <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                  CTA
                </div>
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
                alt=""
              />
            </div>
          </div>
          <div className="rounded-lg bg-black-100 shadow-[0px_2px_6px_rgba(26,_24,_30,_0.04)] overflow-hidden flex flex-col items-end justify-start pt-3 px-3 pb-6 text-xs">
            <div />
            <div className="flex flex-col items-end justify-start gap-[12px] text-sm text-black-60">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="w-[248px] flex flex-row items-start justify-start">
                  <div className="flex-1 rounded bg-black-100 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px] border-[1px] border-solid border-black-85">
                    <img
                      className="relative w-3.5 h-3.5 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/bold--search@2x.png"
                    />
                    <div className="flex-1 relative leading-[20px]">
                      Search by order ID...
                    </div>
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[12px] text-base text-black-30 font-body-1-medium">
                  <div className="rounded bg-black-100 hidden flex-row items-center justify-start py-1.5 px-3 gap-[6px] border-[1px] border-solid border-black-85">
                    <div className="relative leading-[24px]">Filter</div>
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <div className="rounded bg-black-100 hidden flex-row items-center justify-start py-1.5 px-3 gap-[6px] border-[1px] border-solid border-black-85">
                      <div className="relative leading-[24px]">Filter</div>
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-row items-center justify-end gap-[12px]">
                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <div className="rounded bg-black-100 flex flex-row items-center justify-start py-1.5 px-3 gap-[6px] border-[1px] border-solid border-black-85">
                          <div className="relative leading-[24px]">Sort</div>
                          <img
                            className="relative w-4 h-4 object-cover"
                            alt=""
                            src="/outlined--sort@2x.png"
                          />
                        </div>
                        <div className="rounded bg-black-100 hidden flex-row items-center justify-start py-1.5 px-3 gap-[6px] border-[1px] border-solid border-black-85">
                          <div className="relative leading-[24px]">Filter</div>
                          <img
                            className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="relative w-9 h-9">
                        <div className="absolute top-[0px] right-[0px] rounded box-border w-9 h-9 border-[1px] border-solid border-black-85" />
                        <img
                          className="absolute top-[8px] right-[8px] w-5 h-5 object-cover"
                          alt=""
                          src="/iconsdownload@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded bg-black-95 w-[1128px] flex flex-row items-center justify-start py-2.5 px-3 box-border gap-[40px] text-xs text-black-30">
                <img className="relative w-5 h-5 object-cover hidden" alt="" />
                <div className="flex-1 overflow-hidden flex flex-col items-start justify-center">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                      <div className="relative w-12 h-12 hidden">
                        <img
                          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <img
                          className="relative w-5 h-5 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-col items-start justify-center gap-[2px]">
                          <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                            <img
                              className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                              alt=""
                            />
                            <div className="flex flex-row items-center justify-start gap-[4px]">
                              <div className="relative leading-[20px] font-medium">
                                Order ID
                              </div>
                              <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                Strike-Through Data
                              </div>
                            </div>
                            <img
                              className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                              alt=""
                            />
                            <i className="relative text-3xs leading-[16px] hidden text-black-12">
                              Italics
                            </i>
                          </div>
                          <div className="relative leading-[16px] hidden w-[90px]">
                            +1 more
                          </div>
                          <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                            Third Line
                          </div>
                          <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                            <div className="relative leading-[16px] font-semibold">
                              COD
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="relative w-2 h-2 overflow-hidden shrink-0 object-cover hidden"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                    <div className="relative rounded-[50%] w-0 h-0" />
                    <div className="relative rounded-[50%] w-0 h-0" />
                  </div>
                </div>
                <div className="flex-1 overflow-hidden hidden flex-col items-start justify-center">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                      <div className="relative w-12 h-12 hidden">
                        <img
                          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <img
                          className="relative w-5 h-5 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-col items-start justify-center gap-[2px]">
                          <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                            <img
                              className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                              alt=""
                            />
                            <div className="flex flex-row items-center justify-start gap-[4px]">
                              <div className="relative leading-[20px] font-medium">
                                Order status
                              </div>
                              <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                Strike-Through Data
                              </div>
                            </div>
                            <img
                              className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                              alt=""
                            />
                            <i className="relative text-3xs leading-[16px] hidden text-black-12">
                              Italics
                            </i>
                          </div>
                          <div className="relative leading-[16px] hidden w-[90px]">
                            +1 more
                          </div>
                          <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                            Third Line
                          </div>
                          <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                            <div className="relative leading-[16px] font-semibold">
                              COD
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="relative w-2 h-2 overflow-hidden shrink-0 object-cover hidden"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                    <div className="relative rounded-[50%] w-0 h-0" />
                    <div className="relative rounded-[50%] w-0 h-0" />
                  </div>
                </div>
                <div className="flex-1 overflow-hidden flex flex-col items-start justify-center">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                      <div className="relative w-12 h-12 hidden">
                        <img
                          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <img
                          className="relative w-5 h-5 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-col items-start justify-center gap-[2px]">
                          <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                            <img
                              className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                              alt=""
                            />
                            <div className="flex flex-row items-center justify-start gap-[4px]">
                              <div className="relative leading-[20px] font-medium">
                                Order date
                              </div>
                              <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                                Strike-Through Data
                              </div>
                            </div>
                            <img
                              className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                              alt=""
                            />
                            <i className="relative text-3xs leading-[16px] hidden text-black-12">
                              Italics
                            </i>
                          </div>
                          <div className="relative leading-[16px] hidden w-[90px]">
                            +1 more
                          </div>
                          <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                            Third Line
                          </div>
                          <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                            <div className="relative leading-[16px] font-semibold">
                              COD
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="relative w-2 h-2 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/triangleicon@2x.png"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                    <div className="relative rounded-[50%] w-0 h-0" />
                    <div className="relative rounded-[50%] w-0 h-0" />
                  </div>
                </div>
                <div className="flex-1 overflow-hidden flex flex-col items-end justify-center text-right">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                      <div className="relative w-12 h-12 hidden">
                        <img
                          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <img
                          className="relative w-5 h-5 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-col items-start justify-center gap-[2px]">
                          <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                            <img
                              className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                              alt=""
                            />
                            <div className="flex flex-row items-center justify-start gap-[4px]">
                              <div className="relative leading-[20px] font-medium">
                                Order amount
                              </div>
                              <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                Strike-Through Data
                              </div>
                            </div>
                            <img
                              className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                              alt=""
                            />
                            <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                              Italics
                            </i>
                          </div>
                          <div className="relative leading-[16px] text-left hidden w-[90px]">
                            +1 more
                          </div>
                          <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                            Third Line
                          </div>
                          <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                            <div className="relative leading-[16px] font-semibold">
                              COD
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="relative w-2 h-2 overflow-hidden shrink-0 object-cover hidden"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                    <div className="relative rounded-[50%] w-0 h-0" />
                    <div className="relative rounded-[50%] w-0 h-0" />
                  </div>
                </div>
                <div className="flex-1 overflow-hidden flex flex-col items-end justify-center text-right">
                  <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0]">
                    <div className="relative rounded-[50%] w-0 h-0" />
                    <div className="relative rounded-[50%] w-0 h-0" />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[4px] mt-[-1px]">
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="relative w-12 h-12 hidden">
                          <img
                            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[12px]">
                          <img
                            className="relative w-5 h-5 object-cover hidden"
                            alt=""
                          />
                          <div className="flex flex-col items-start justify-center gap-[2px]">
                            <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                              <img
                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                alt=""
                              />
                              <div className="flex flex-row items-center justify-start gap-[4px]">
                                <div className="relative leading-[20px] font-medium">
                                  Transaction fees
                                </div>
                                <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                                  Strike-Through Data
                                </div>
                              </div>
                              <img
                                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                                alt=""
                              />
                              <i className="relative text-3xs leading-[16px] hidden text-black-12 text-left">
                                Italics
                              </i>
                            </div>
                            <div className="relative leading-[16px] text-left hidden w-[90px]">
                              +1 more
                            </div>
                            <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                              Third Line
                            </div>
                            <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                              <div className="relative leading-[16px] font-semibold">
                                COD
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="relative w-2 h-2 overflow-hidden shrink-0 object-cover hidden"
                        alt=""
                      />
                    </div>
                    <img
                      className="relative w-3.5 h-3.5 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/outlined--info@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Accepted</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm font-body-1-medium">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-primary-orange w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Shipped</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm font-body-1-medium">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-primary-blue w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Delivered</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm font-body-1-medium">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-primary-orange w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Shipped</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm font-body-1-medium">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-primary-orange w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Shipped</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Accepted</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Accepted</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm font-body-1-medium">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-secondary-yellow w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Pending</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm font-body-1-medium">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-secondary-yellow w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Pending</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Accepted</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Accepted</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm font-body-1-medium">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-secondary-red w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Cancelled</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Accepted</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Accepted</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Accepted</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Accepted</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Accepted</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-black-12">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                        Third Line
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                    <div className="relative leading-[20px]">Accepted</div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            7 July, 2023
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">
                            ₹1,278.23
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-12 h-12 hidden">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-5 h-5 object-cover hidden"
                      alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[20px]">₹22</div>
                          <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                            Strike-Through Data
                          </div>
                        </div>
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                        />
                        <i className="relative text-3xs leading-[16px] hidden text-left">
                          Italics
                        </i>
                      </div>
                      <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                        +1 more
                      </div>
                      <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                        Third Line
                      </div>
                      <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                        <div className="relative leading-[16px] font-semibold">
                          COD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                  <div className="relative rounded-[50%] w-0 h-0" />
                  <div className="relative rounded-[50%] w-0 h-0" />
                </div>
              </div>
              <img
                className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/divider@2x.png"
              />
            </div>
            <div className="flex flex-col items-center justify-start gap-[24px]">
              <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-start py-3.5 px-3 box-border relative gap-[40px]">
                <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[0] text-primary-blue">
                  <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                    <div className="relative w-12 h-12 hidden">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="relative w-5 h-5 object-cover hidden"
                        alt=""
                      />
                      <div className="flex flex-col items-start justify-center gap-[2px]">
                        <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                          <img
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                          />
                          <div className="relative leading-[20px] font-medium">{`#281209 `}</div>
                          <img
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                          />
                          <i className="relative text-3xs leading-[16px] hidden text-black-12">
                            Italics
                          </i>
                        </div>
                        <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                          +1 more
                        </div>
                        <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
                          Third Line
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
                    <div className="relative rounded-[50%] w-0 h-0" />
                    <div className="relative rounded-[50%] w-0 h-0" />
                  </div>
                </div>
                <div className="flex-1 bg-black-100 overflow-hidden hidden flex-col items-start justify-center z-[1] text-sm">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <div className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5" />
                      <div className="relative leading-[20px]">Accepted</div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                    <div className="relative rounded-[50%] w-0 h-0" />
                    <div className="relative rounded-[50%] w-0 h-0" />
                  </div>
                </div>
                <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-start justify-center z-[2]">
                  <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                    <div className="relative w-12 h-12 hidden">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="relative w-5 h-5 object-cover hidden"
                        alt=""
                      />
                      <div className="flex flex-col items-start justify-center gap-[2px]">
                        <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                          <img
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                          />
                          <div className="flex flex-row items-center justify-start gap-[4px]">
                            <div className="relative leading-[20px]">
                              7 July, 2023
                            </div>
                            <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 hidden">
                              Strike-Through Data
                            </div>
                          </div>
                          <img
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                          />
                          <i className="relative text-3xs leading-[16px] hidden">
                            Italics
                          </i>
                        </div>
                        <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
                          +1 more
                        </div>
                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue hidden">
                          Third Line
                        </div>
                        <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-right text-primary-orange">
                          <div className="relative leading-[16px] font-semibold">
                            COD
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
                    <div className="relative rounded-[50%] w-0 h-0" />
                    <div className="relative rounded-[50%] w-0 h-0" />
                  </div>
                </div>
                <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[3] text-right">
                  <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                    <div className="relative w-12 h-12 hidden">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="relative w-5 h-5 object-cover hidden"
                        alt=""
                      />
                      <div className="flex flex-col items-start justify-center gap-[2px]">
                        <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                          <img
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                          />
                          <div className="flex flex-row items-center justify-start gap-[4px]">
                            <div className="relative leading-[20px]">
                              ₹1,278.23
                            </div>
                            <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                              Strike-Through Data
                            </div>
                          </div>
                          <img
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                          />
                          <i className="relative text-3xs leading-[16px] hidden text-left">
                            Italics
                          </i>
                        </div>
                        <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                          +1 more
                        </div>
                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                          Third Line
                        </div>
                        <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                          <div className="relative leading-[16px] font-semibold">
                            COD
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                    <div className="relative rounded-[50%] w-0 h-0" />
                    <div className="relative rounded-[50%] w-0 h-0" />
                  </div>
                </div>
                <div className="flex-1 bg-black-100 overflow-hidden flex flex-col items-end justify-center z-[4] text-right">
                  <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                    <div className="relative w-12 h-12 hidden">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="relative w-5 h-5 object-cover hidden"
                        alt=""
                      />
                      <div className="flex flex-col items-start justify-center gap-[2px]">
                        <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
                          <img
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                          />
                          <div className="flex flex-row items-center justify-start gap-[4px]">
                            <div className="relative leading-[20px]">₹22</div>
                            <div className="relative [text-decoration:line-through] leading-[20px] text-black-50 text-left hidden">
                              Strike-Through Data
                            </div>
                          </div>
                          <img
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                          />
                          <i className="relative text-3xs leading-[16px] hidden text-left">
                            Italics
                          </i>
                        </div>
                        <div className="relative leading-[16px] text-black-30 text-left hidden w-[90px]">
                          +1 more
                        </div>
                        <div className="relative [text-decoration:underline] leading-[16px] font-medium text-primary-blue text-left hidden">
                          Third Line
                        </div>
                        <div className="rounded-10xs bg-chocolate hidden flex-row items-center justify-end py-0.5 px-2 text-primary-orange">
                          <div className="relative leading-[16px] font-semibold">
                            COD
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
                    <div className="relative rounded-[50%] w-0 h-0" />
                    <div className="relative rounded-[50%] w-0 h-0" />
                  </div>
                </div>
                <img
                  className="self-stretch absolute my-0 mx-[!important] w-[calc(100%_-_24px)] right-[12px] bottom-[-1px] left-[12px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                  alt=""
                  src="/divider@2x.png"
                />
              </div>
              <div className="flex flex-col items-center justify-center text-center text-sm text-black-30 font-body-1-medium">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-row items-center justify-start gap-[24px]">
                        <div className="rounded bg-black-100 flex flex-row items-center justify-center py-1.5 pr-3 pl-1.5 gap-[6px] border-[1px] border-solid border-black-85">
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                          />
                          <img
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-contain"
                            alt=""
                            src="/outlined--chevron-right@2x.png"
                          />
                          <div className="flex flex-row items-start justify-start">
                            <div className="relative leading-[20px] font-medium">
                              Previous
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[8px]">
                          <div className="rounded w-7 h-7 flex flex-col items-center justify-center py-0.5 px-0 box-border">
                            <div className="self-stretch relative leading-[20px]">
                              1
                            </div>
                          </div>
                          <div className="rounded w-7 h-7 flex flex-col items-center justify-center py-0.5 px-0 box-border">
                            <div className="self-stretch relative leading-[20px]">
                              ...
                            </div>
                          </div>
                          <div className="rounded bg-primary-blue w-7 h-7 flex flex-col items-center justify-center py-1.5 px-2 box-border text-black-100">
                            <div className="relative leading-[20px] font-medium">
                              10
                            </div>
                          </div>
                          <div className="rounded w-7 h-7 flex flex-col items-center justify-center py-0.5 px-0 box-border">
                            <div className="self-stretch relative leading-[20px]">
                              11
                            </div>
                          </div>
                          <div className="rounded w-7 h-7 flex flex-col items-center justify-center py-0.5 px-0 box-border">
                            <div className="self-stretch relative leading-[20px]">
                              12
                            </div>
                          </div>
                          <div className="rounded w-7 h-7 flex flex-col items-center justify-center py-0.5 px-0 box-border">
                            <div className="self-stretch relative leading-[20px]">
                              13
                            </div>
                          </div>
                          <div className="rounded w-7 h-7 flex flex-col items-center justify-center py-0.5 px-0 box-border">
                            <div className="self-stretch relative leading-[20px]">
                              14
                            </div>
                          </div>
                          <div className="rounded w-7 h-7 flex flex-col items-center justify-center py-0.5 px-0 box-border">
                            <div className="self-stretch relative leading-[20px]">
                              15
                            </div>
                          </div>
                          <div className="rounded w-7 h-7 flex flex-col items-center justify-center py-0.5 px-0 box-border">
                            <div className="self-stretch relative leading-[20px]">
                              16
                            </div>
                          </div>
                          <div className="rounded w-7 h-7 flex flex-col items-center justify-center py-0.5 px-0 box-border">
                            <div className="self-stretch relative leading-[20px]">
                              17
                            </div>
                          </div>
                          <div className="rounded w-7 h-7 flex flex-col items-center justify-center py-0.5 px-0 box-border">
                            <div className="self-stretch relative leading-[20px]">
                              18
                            </div>
                          </div>
                        </div>
                        <div className="rounded bg-black-100 flex flex-row items-center justify-center py-1.5 pr-1.5 pl-3 gap-[6px] border-[1px] border-solid border-black-85">
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                          />
                          <div className="flex flex-row items-start justify-start">
                            <div className="relative leading-[20px] font-medium">
                              Next
                            </div>
                          </div>
                          <img
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/outlined--chevron-right@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] h-[1482px] flex flex-col items-start justify-start text-mini text-black-100 font-body-1-medium">
        <div className="flex-1 bg-secondary-navbar w-56 flex flex-col items-center justify-start py-4 px-2.5 box-border gap-[16px]">
          <div className="flex-1 flex flex-col items-center justify-start gap-[24px]">
            <div className="w-48 flex flex-row items-center justify-start relative gap-[12px]">
              <div className="relative rounded bg-black-100 w-10 h-10 z-[0]" />
              <div className="flex-1 flex flex-col items-start justify-center gap-[4px] z-[1]">
                <div className="self-stretch relative leading-[22px] font-medium">
                  Nishyan
                </div>
                <div className="self-stretch relative text-smi [text-decoration:underline] leading-[16px] font-caption-regular opacity-[0.8]">
                  Visit store
                </div>
              </div>
              <img
                className="absolute my-0 mx-[!important] top-[0.5px] left-[0.5px] rounded w-[39px] h-[39px] object-cover z-[2]"
                alt=""
                src="/image@2x.png"
              />
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/bold--chevron-down@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[4px] text-sm">
              <div className="rounded w-52 flex flex-row items-start justify-start py-2 px-4 box-border gap-[12px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 object-cover opacity-[0.8]"
                  alt=""
                  src="/navbar-icon@2x.png"
                />
                <div className="relative leading-[20px] font-medium opacity-[0.8]">
                  Home
                </div>
              </div>
              <div className="rounded w-52 flex flex-row items-start justify-start py-2 px-4 box-border gap-[12px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 object-cover opacity-[0.8]"
                  alt=""
                  src="/navbar-icon@2x.png"
                />
                <div className="relative leading-[20px] font-medium opacity-[0.8]">
                  Orders
                </div>
              </div>
              <div className="rounded w-52 flex flex-row items-start justify-start py-2 px-4 box-border gap-[12px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 object-cover opacity-[0.8]"
                  alt=""
                  src="/navbar-icon@2x.png"
                />
                <div className="relative leading-[20px] font-medium opacity-[0.8]">
                  Products
                </div>
              </div>
              <div className="rounded w-52 flex flex-row items-start justify-start py-2 px-4 box-border gap-[12px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 object-cover opacity-[0.8]"
                  alt=""
                  src="/navbar-icon@2x.png"
                />
                <div className="relative leading-[20px] font-medium opacity-[0.8]">
                  Delivery
                </div>
              </div>
              <div className="rounded w-52 flex flex-row items-start justify-start py-2 px-4 box-border gap-[12px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 object-cover opacity-[0.8]"
                  alt=""
                  src="/navbar-icon@2x.png"
                />
                <div className="relative leading-[20px] font-medium opacity-[0.8]">
                  Marketing
                </div>
              </div>
              <div className="rounded w-52 flex flex-row items-start justify-start py-2 px-4 box-border gap-[12px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 object-cover opacity-[0.8]"
                  alt=""
                  src="/navbar-icon@2x.png"
                />
                <div className="relative leading-[20px] font-medium opacity-[0.8]">
                  Analytics
                </div>
              </div>
              <div className="rounded bg-gray w-52 flex flex-row items-start justify-start py-2 px-4 box-border gap-[12px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/navbar-icon@2x.png"
                />
                <div className="relative leading-[20px] font-medium">
                  Payments
                </div>
              </div>
              <div className="rounded w-52 flex flex-row items-start justify-start py-2 px-4 box-border gap-[12px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 object-cover opacity-[0.8]"
                  alt=""
                  src="/navbar-icon@2x.png"
                />
                <div className="relative leading-[20px] font-medium opacity-[0.8]">
                  Tools
                </div>
              </div>
              <div className="rounded w-52 flex flex-row items-start justify-start py-2 px-4 box-border gap-[12px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 object-cover opacity-[0.8]"
                  alt=""
                  src="/navbar-icon@2x.png"
                />
                <div className="relative leading-[20px] font-medium opacity-[0.8]">
                  Discounts
                </div>
              </div>
              <div className="rounded w-52 flex flex-row items-start justify-start py-2 px-4 box-border gap-[12px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 object-cover opacity-[0.8]"
                  alt=""
                  src="/navbar-icon@2x.png"
                />
                <div className="relative leading-[20px] font-medium opacity-[0.8]">
                  Audience
                </div>
              </div>
              <div className="rounded w-52 hidden flex-row items-start justify-start py-2 px-4 box-border gap-[12px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 object-cover opacity-[0.8]"
                  alt=""
                />
                <div className="relative leading-[20px] font-medium opacity-[0.8]">
                  Affiliates
                </div>
              </div>
              <div className="rounded w-52 hidden flex-row items-start justify-start py-2 px-4 box-border gap-[12px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 object-cover opacity-[0.8]"
                  alt=""
                />
                <div className="relative leading-[20px] font-medium opacity-[0.8]">
                  Vendors
                </div>
              </div>
              <div className="rounded w-52 flex flex-row items-start justify-start py-2 px-4 box-border gap-[12px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 object-cover opacity-[0.8]"
                  alt=""
                  src="/navbar-icon@2x.png"
                />
                <div className="relative leading-[20px] font-medium opacity-[0.8]">
                  Appearance
                </div>
              </div>
              <div className="rounded w-52 flex flex-row items-start justify-start py-2 px-4 box-border gap-[12px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 object-cover opacity-[0.8]"
                  alt=""
                  src="/navbar-icon@2x.png"
                />
                <div className="relative leading-[20px] font-medium opacity-[0.8]">
                  Plugins
                </div>
              </div>
            </div>
          </div>
          <div className="rounded bg-darkslategray w-48 flex flex-col items-start justify-start py-1.5 px-3 box-border text-smi">
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <div className="rounded bg-gray flex flex-row items-start justify-start p-1.5">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/outline--wallet@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[2px]">
                <div className="relative leading-[16px] opacity-[0.8]">
                  Available credits
                </div>
                <div className="relative text-base leading-[24px] font-medium">
                  222.10
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsCashfreeDashboard;
