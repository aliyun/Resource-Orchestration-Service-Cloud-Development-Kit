using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection.Datasource
{
    /// <summary>Properties for defining a `RosInstances`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-instances
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.datasource.RosInstancesProps")]
    public interface IRosInstancesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: The first ID of the resource.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosInstances`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-instances
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.datasource.RosInstancesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.Datasource.IRosInstancesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The first ID of the resource.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
