import { Token } from "./token";

const ROS_REGION = "ALIYUN::Region";
const ROS_STACKID = "ALIYUN::StackId";
const ROS_STACKNAME = "ALIYUN::StackName";
const ROS_NOVALUE = "ALIYUN::NoValue";
const ROS_ACCOUNTID = "ALIYUN::AccountId";
const ROS_TENANTID = "ALIYUN::TenantId";

/**
 * Accessor for pseudo parameters
 */
export class RosPseudo {
  private constructor() {}

  public static get accountId(): string {
    return this.asString(ROS_ACCOUNTID);
  }

  public static get region(): string {
    return this.asString(ROS_REGION);
  }

  public static get stackId(): string {
    return this.asString(ROS_STACKID);
  }

  public static get stackName(): string {
    return this.asString(ROS_STACKNAME);
  }

  public static get noValue(): string {
    return this.asString(ROS_NOVALUE);
  }

  public static get tenantId(): string {
    return this.asString(ROS_TENANTID);
  }

  private static asString(name: string) {
    return Token.asString({ Ref: name }, { displayHint: name });
  }
}
