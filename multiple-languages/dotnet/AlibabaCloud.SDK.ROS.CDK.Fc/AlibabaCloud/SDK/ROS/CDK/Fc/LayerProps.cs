using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FC::Layer`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.LayerProps")]
    public class LayerProps : AlibabaCloud.SDK.ROS.CDK.Fc.ILayerProps
    {
        /// <summary>Property code: The code of layer.</summary>
        [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosLayer.CodeProperty\"}]}}", isOverride: true)]
        public object Code
        {
            get;
            set;
        }

        /// <summary>Property compatibleRuntime: The runtime environment supported by the layer.</summary>
        /// <remarks>
        /// For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
        /// </remarks>
        [JsiiProperty(name: "compatibleRuntime", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object CompatibleRuntime
        {
            get;
            set;
        }

        /// <summary>Property layerName: The name of layer.</summary>
        [JsiiProperty(name: "layerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object LayerName
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the layer.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }
    }
}
