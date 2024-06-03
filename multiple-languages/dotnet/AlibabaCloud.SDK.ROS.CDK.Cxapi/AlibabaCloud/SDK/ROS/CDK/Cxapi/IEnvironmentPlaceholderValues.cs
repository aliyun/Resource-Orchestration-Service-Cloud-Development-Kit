using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    /// <summary>Return the appropriate values for the environment placeholders.</summary>
    [JsiiInterface(nativeType: typeof(IEnvironmentPlaceholderValues), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.EnvironmentPlaceholderValues")]
    public interface IEnvironmentPlaceholderValues
    {
        /// <summary>Return the account.</summary>
        [JsiiProperty(name: "accountId", typeJson: "{\"primitive\":\"string\"}")]
        string AccountId
        {
            get;
        }

        /// <summary>Return the region.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
        string Region
        {
            get;
        }

        /// <summary>Return the appropriate values for the environment placeholders.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEnvironmentPlaceholderValues), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.EnvironmentPlaceholderValues")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cxapi.IEnvironmentPlaceholderValues
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Return the account.</summary>
            [JsiiProperty(name: "accountId", typeJson: "{\"primitive\":\"string\"}")]
            public string AccountId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Return the region.</summary>
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
            public string Region
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
