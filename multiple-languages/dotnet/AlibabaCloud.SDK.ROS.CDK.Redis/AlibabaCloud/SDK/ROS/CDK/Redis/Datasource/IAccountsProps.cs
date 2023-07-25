using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::REDIS::Accounts`.</summary>
    [JsiiInterface(nativeType: typeof(IAccountsProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.datasource.AccountsProps")]
    public interface IAccountsProps
    {
        /// <summary>Property instanceId: The ID of the Redis instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property accountName: The name of the Redis account.</summary>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::REDIS::Accounts`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccountsProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.datasource.AccountsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.Datasource.IAccountsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The ID of the Redis instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accountName: The name of the Redis account.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
