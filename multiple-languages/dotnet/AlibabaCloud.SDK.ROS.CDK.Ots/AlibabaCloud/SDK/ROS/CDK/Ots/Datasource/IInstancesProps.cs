using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::OTS::Instances`.</summary>
    [JsiiInterface(nativeType: typeof(IInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.datasource.InstancesProps")]
    public interface IInstancesProps
    {
        /// <summary>Property instanceName: The name of instance.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: The status of instance.</summary>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::OTS::Instances`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.datasource.InstancesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.Datasource.IInstancesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceName: The name of instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: The status of instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
