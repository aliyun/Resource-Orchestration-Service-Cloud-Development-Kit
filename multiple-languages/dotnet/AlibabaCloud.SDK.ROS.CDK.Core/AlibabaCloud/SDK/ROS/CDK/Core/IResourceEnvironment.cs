using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiInterface(nativeType: typeof(IResourceEnvironment), fullyQualifiedName: "@alicloud/ros-cdk-core.ResourceEnvironment")]
    public interface IResourceEnvironment
    {
        /// <summary>The Alibaba Cloud account ID that this resource belongs to.</summary>
        /// <remarks>
        /// Since this can be a Token
        /// (for example, when the account is ROS's ALIYUN::AccountId intrinsic),
        /// make sure to use Token.compareStrings()
        /// instead of just comparing the values for equality.
        /// </remarks>
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}")]
        string Account
        {
            get;
        }

        /// <summary>The Alibaba Cloud region that this resource belongs to.</summary>
        /// <remarks>
        /// Since this can be a Token
        /// (for example, when the region is ROS's ALIYUN::Region intrinsic),
        /// make sure to use Token.compareStrings()
        /// instead of just comparing the values for equality.
        /// </remarks>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
        string Region
        {
            get;
        }

        [JsiiTypeProxy(nativeType: typeof(IResourceEnvironment), fullyQualifiedName: "@alicloud/ros-cdk-core.ResourceEnvironment")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The Alibaba Cloud account ID that this resource belongs to.</summary>
            /// <remarks>
            /// Since this can be a Token
            /// (for example, when the account is ROS's ALIYUN::AccountId intrinsic),
            /// make sure to use Token.compareStrings()
            /// instead of just comparing the values for equality.
            /// </remarks>
            [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}")]
            public string Account
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The Alibaba Cloud region that this resource belongs to.</summary>
            /// <remarks>
            /// Since this can be a Token
            /// (for example, when the region is ROS's ALIYUN::Region intrinsic),
            /// make sure to use Token.compareStrings()
            /// instead of just comparing the values for equality.
            /// </remarks>
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
            public string Region
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
