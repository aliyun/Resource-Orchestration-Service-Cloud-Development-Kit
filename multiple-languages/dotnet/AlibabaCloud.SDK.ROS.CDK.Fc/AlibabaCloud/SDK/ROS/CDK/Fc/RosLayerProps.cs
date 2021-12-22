using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FC::Layer`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosLayerProps")]
    public class RosLayerProps : AlibabaCloud.SDK.ROS.CDK.Fc.IRosLayerProps
    {
        /// <remarks>
        /// <strong>Property</strong>: code: The code of layer.
        /// </remarks>
        [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosLayer.CodeProperty\"}]}}", isOverride: true)]
        public object Code
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: compatibleRuntime: The runtime environment supported by the layer. For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
        /// </remarks>
        [JsiiProperty(name: "compatibleRuntime", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object CompatibleRuntime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: layerName: The name of layer
        /// </remarks>
        [JsiiProperty(name: "layerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object LayerName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the layer.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }
    }
}
