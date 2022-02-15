using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VS::Group`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vs.GroupProps")]
    public class GroupProps : AlibabaCloud.SDK.ROS.CDK.Vs.IGroupProps
    {
        /// <summary>Property inProtocol: Access protocol used by the space.</summary>
        /// <remarks>
        /// Value: gb28181, rtmp
        /// </remarks>
        [JsiiProperty(name: "inProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InProtocol
        {
            get;
            set;
        }

        /// <summary>Property name: Space name.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }

        /// <summary>Property outProtocol: Play protocol used by the space, multivalued separated by commas.</summary>
        /// <remarks>
        /// Value: flv, hls, rtmp
        /// </remarks>
        [JsiiProperty(name: "outProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object OutProtocol
        {
            get;
            set;
        }

        /// <summary>Property playDomain: Use of the domain name space broadcast stream.</summary>
        [JsiiProperty(name: "playDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PlayDomain
        {
            get;
            set;
        }

        /// <summary>Property pushDomain: Plug flow domain name space to use.</summary>
        /// <remarks>
        /// (Only access to the space rtmp)
        /// </remarks>
        [JsiiProperty(name: "pushDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object PushDomain
        {
            get;
            set;
        }

        /// <summary>Property region: Space belongs to the region, as a service center.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Region
        {
            get;
            set;
        }

        /// <summary>Property app: Application name space used, the default live.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "app", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? App
        {
            get;
            set;
        }

        /// <summary>Property callback: Updating the space callback device / flow state.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "callback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Callback
        {
            get;
            set;
        }

        /// <summary>Property description: Space description.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property enabled: Space is enabled.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Enabled
        {
            get;
            set;
        }

        /// <summary>Property lazyPull: Whether to enable on-demand pull flow, default false.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "lazyPull", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LazyPull
        {
            get;
            set;
        }
    }
}
