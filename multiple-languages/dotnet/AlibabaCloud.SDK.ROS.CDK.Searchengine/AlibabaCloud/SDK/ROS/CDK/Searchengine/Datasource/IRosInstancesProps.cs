using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Searchengine.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::SearchEngine::Instances`.</summary>
    [JsiiInterface(nativeType: typeof(IRosInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-searchengine.datasource.RosInstancesProps")]
    public interface IRosInstancesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of instance
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

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of resource group
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

        /// <summary>Properties for defining a `DATASOURCE::SearchEngine::Instances`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-searchengine.datasource.RosInstancesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Searchengine.Datasource.IRosInstancesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of instance
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of resource group
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
