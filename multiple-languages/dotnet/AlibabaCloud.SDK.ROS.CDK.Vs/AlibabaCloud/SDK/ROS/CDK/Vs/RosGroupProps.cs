using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VS::Group`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vs.RosGroupProps")]
    public class RosGroupProps : AlibabaCloud.SDK.ROS.CDK.Vs.IRosGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: inProtocol: Access protocol used by the space.
        /// Value: gb28181, rtmp
        /// </remarks>
        [JsiiProperty(name: "inProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InProtocol
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Space name.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: outProtocol: Play protocol used by the space, multivalued separated by commas.
        /// Value: flv, hls, rtmp
        /// </remarks>
        [JsiiProperty(name: "outProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object OutProtocol
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: playDomain: Use of the domain name space broadcast stream.
        /// </remarks>
        [JsiiProperty(name: "playDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PlayDomain
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
        /// </remarks>
        [JsiiProperty(name: "pushDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PushDomain
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: region: Space belongs to the region, as a service center.
        /// </remarks>
        [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Region
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: app: Application name space used, the default live.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "app", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? App
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: callback: Updating the space callback device / flow state
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "callback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Callback
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Space description.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: enabled: Space is enabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Enabled
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: lazyPull: Whether to enable on-demand pull flow, default false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "lazyPull", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LazyPull
        {
            get;
            set;
        }
    }
}
