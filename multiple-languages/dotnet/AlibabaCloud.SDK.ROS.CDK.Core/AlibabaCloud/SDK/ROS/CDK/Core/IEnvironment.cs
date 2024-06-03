using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>The deployment environment for a stack.</summary>
    [JsiiInterface(nativeType: typeof(IEnvironment), fullyQualifiedName: "@alicloud/ros-cdk-core.Environment")]
    public interface IEnvironment
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
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Account
        {
            get
            {
                return null;
            }
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
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Region
        {
            get
            {
                return null;
            }
        }

        /// <summary>The deployment environment for a stack.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEnvironment), fullyQualifiedName: "@alicloud/ros-cdk-core.Environment")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IEnvironment
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

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
                get => GetInstanceProperty<string?>();
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
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
