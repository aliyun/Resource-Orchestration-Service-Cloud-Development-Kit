/**
 * The deployment environment for a stack.
 */
export interface Environment {
  /**
   * The ALIYUN account ID for this environment.
   *
   * This can be either a concrete value such as `585191031104` or `ALIYUN.ACCOUNT_ID` which
   * indicates that account ID will only be determined during deployment (it
   * will resolve to the ROS intrinsic `{"Ref":"ALIYUN::AccountId"}`).
   * Note that certain features, such as cross-stack references and
   * environmental context providers require concrete region information and
   * will cause this stack to emit synthesis errors.
   *
   * @default ALIYUN.ACCOUNT_ID which means that the stack will be account-agnostic.
   */
  readonly account?: string;

  /**
   * The ALIYUN region for this environment.
   *
   * This can be either a concrete value such as `eu-west-2` or `ALIYUN.REGION`
   * which indicates that account ID will only be determined during deployment
   * (it will resolve to the ROS intrinsic `{"Ref":"ALIYUN::Region"}`).
   * Note that certain features, such as cross-stack references and
   * environmental context providers require concrete region information and
   * will cause this stack to emit synthesis errors.
   *
   * @default ALIYUN.REGION which means that the stack will be region-agnostic.
   */
  readonly region?: string;
}
