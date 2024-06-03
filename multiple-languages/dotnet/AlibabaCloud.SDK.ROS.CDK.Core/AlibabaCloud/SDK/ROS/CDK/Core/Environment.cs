using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>The deployment environment for a stack.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.Environment")]
    public class Environment : AlibabaCloud.SDK.ROS.CDK.Core.IEnvironment
    {
        /// <summary>The ALIYUN account ID for this environment.</summary>
        /// <remarks>
        /// This can be either a concrete value such as <c>585191031104</c> or <c>ALIYUN.ACCOUNT_ID</c> which
        /// indicates that account ID will only be determined during deployment (it
        /// will resolve to the ROS intrinsic <c>{"Ref":"ALIYUN::AccountId"}</c>).
        /// Note that certain features, such as cross-stack references and
        /// environmental context providers require concrete region information and
        /// will cause this stack to emit synthesis errors.
        ///
        /// <strong>Default</strong>: ALIYUN.ACCOUNT_ID which means that the stack will be account-agnostic.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? Account
        {
            get;
            set;
        }

        /// <summary>The ALIYUN region for this environment.</summary>
        /// <remarks>
        /// This can be either a concrete value such as <c>eu-west-2</c> or <c>ALIYUN.REGION</c>
        /// which indicates that account ID will only be determined during deployment
        /// (it will resolve to the ROS intrinsic <c>{"Ref":"ALIYUN::Region"}</c>).
        /// Note that certain features, such as cross-stack references and
        /// environmental context providers require concrete region information and
        /// will cause this stack to emit synthesis errors.
        ///
        /// <strong>Default</strong>: ALIYUN.REGION which means that the stack will be region-agnostic.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? Region
        {
            get;
            set;
        }
    }
}
