using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds.Datasource
{
    /// <summary>Properties for defining a `Accounts`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-accounts
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAccountsProps), fullyQualifiedName: "@alicloud/ros-cdk-drds.datasource.AccountsProps")]
    public interface IAccountsProps
    {
        /// <summary>Property instanceId: The ID of the PolarDB-X 1.0 instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Accounts`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-accounts
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAccountsProps), fullyQualifiedName: "@alicloud/ros-cdk-drds.datasource.AccountsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IAccountsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The ID of the PolarDB-X 1.0 instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
