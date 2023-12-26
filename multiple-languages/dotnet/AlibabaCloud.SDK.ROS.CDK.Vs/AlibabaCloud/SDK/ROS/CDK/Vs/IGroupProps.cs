using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vs
{
    /// <summary>Properties for defining a `Group`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vs-group
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-vs.GroupProps")]
    public interface IGroupProps
    {
        /// <summary>Property inProtocol: Access protocol used by the space.</summary>
        /// <remarks>
        /// Value: gb28181, rtmp
        /// </remarks>
        [JsiiProperty(name: "inProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InProtocol
        {
            get;
        }

        /// <summary>Property name: Space name.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property outProtocol: Play protocol used by the space, multivalued separated by commas.</summary>
        /// <remarks>
        /// Value: flv, hls, rtmp
        /// </remarks>
        [JsiiProperty(name: "outProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OutProtocol
        {
            get;
        }

        /// <summary>Property playDomain: Use of the domain name space broadcast stream.</summary>
        [JsiiProperty(name: "playDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PlayDomain
        {
            get;
        }

        /// <summary>Property pushDomain: Plug flow domain name space to use.</summary>
        /// <remarks>
        /// (Only access to the space rtmp)
        /// </remarks>
        [JsiiProperty(name: "pushDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PushDomain
        {
            get;
        }

        /// <summary>Property region: Space belongs to the region, as a service center.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Region
        {
            get;
        }

        /// <summary>Property app: Application name space used, the default live.</summary>
        [JsiiProperty(name: "app", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? App
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property callback: Updating the space callback device \/ flow state.</summary>
        [JsiiProperty(name: "callback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Callback
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Space description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enabled: Space is enabled.</summary>
        [JsiiProperty(name: "enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Enabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property lazyPull: Whether to enable on-demand pull flow, default false.</summary>
        [JsiiProperty(name: "lazyPull", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LazyPull
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Group`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vs-group
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-vs.GroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vs.IGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property inProtocol: Access protocol used by the space.</summary>
            /// <remarks>
            /// Value: gb28181, rtmp
            /// </remarks>
            [JsiiProperty(name: "inProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InProtocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: Space name.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property outProtocol: Play protocol used by the space, multivalued separated by commas.</summary>
            /// <remarks>
            /// Value: flv, hls, rtmp
            /// </remarks>
            [JsiiProperty(name: "outProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OutProtocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property playDomain: Use of the domain name space broadcast stream.</summary>
            [JsiiProperty(name: "playDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PlayDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property pushDomain: Plug flow domain name space to use.</summary>
            /// <remarks>
            /// (Only access to the space rtmp)
            /// </remarks>
            [JsiiProperty(name: "pushDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PushDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property region: Space belongs to the region, as a service center.</summary>
            [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Region
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property app: Application name space used, the default live.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "app", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? App
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property callback: Updating the space callback device \/ flow state.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "callback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Callback
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Space description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enabled: Space is enabled.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Enabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property lazyPull: Whether to enable on-demand pull flow, default false.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "lazyPull", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LazyPull
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
