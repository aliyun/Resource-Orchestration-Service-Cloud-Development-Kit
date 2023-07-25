using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CR::Instances`.</summary>
    [JsiiInterface(nativeType: typeof(IRosInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.datasource.RosInstancesProps")]
    public interface IRosInstancesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceName: InstanceName.
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::CR::Instances`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.datasource.RosInstancesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.Datasource.IRosInstancesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceName: InstanceName.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
