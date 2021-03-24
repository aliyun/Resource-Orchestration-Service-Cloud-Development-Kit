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
        [JsiiProperty(name: "inProtocol", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InProtocol
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Space name.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: outProtocol: Play protocol used by the space, multivalued separated by commas.
        /// Value: flv, hls, rtmp
        /// </remarks>
        [JsiiProperty(name: "outProtocol", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string OutProtocol
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: playDomain: Use of the domain name space broadcast stream.
        /// </remarks>
        [JsiiProperty(name: "playDomain", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PlayDomain
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
        /// </remarks>
        [JsiiProperty(name: "pushDomain", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PushDomain
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: region: Space belongs to the region, as a service center.
        /// </remarks>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Region
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: app: Application name space used, the default live.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "app", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? App
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: callback: Updating the space callback device / flow state
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "callback", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Callback
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Space description.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: enabled: Space is enabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Enabled
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: lazyPull: Whether to enable on-demand pull flow, default false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "lazyPull", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? LazyPull
        {
            get;
            set;
        }
    }
}
