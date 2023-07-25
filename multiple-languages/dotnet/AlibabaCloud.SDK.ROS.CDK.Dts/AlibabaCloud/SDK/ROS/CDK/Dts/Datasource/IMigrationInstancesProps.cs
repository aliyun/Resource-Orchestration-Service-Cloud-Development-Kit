using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::DTS::MigrationInstances`.</summary>
    [JsiiInterface(nativeType: typeof(IMigrationInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.datasource.MigrationInstancesProps")]
    public interface IMigrationInstancesProps
    {
        /// <summary>Property dtsInstanceId: Synchronization instance ID.</summary>
        [JsiiProperty(name: "dtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DtsInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::DTS::MigrationInstances`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMigrationInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.datasource.MigrationInstancesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IMigrationInstancesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dtsInstanceId: Synchronization instance ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DtsInstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
