using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vs
{
    /// <summary>Properties for defining a `ALIYUN::VS::Group`.</summary>
    [JsiiInterface(nativeType: typeof(IRosGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-vs.RosGroupProps")]
    public interface IRosGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: inProtocol: Access protocol used by the space.
        /// Value: gb28181, rtmp
        /// </remarks>
        [JsiiProperty(name: "inProtocol", typeJson: "{\"primitive\":\"string\"}")]
        string InProtocol
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Space name.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: outProtocol: Play protocol used by the space, multivalued separated by commas.
        /// Value: flv, hls, rtmp
        /// </remarks>
        [JsiiProperty(name: "outProtocol", typeJson: "{\"primitive\":\"string\"}")]
        string OutProtocol
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: playDomain: Use of the domain name space broadcast stream.
        /// </remarks>
        [JsiiProperty(name: "playDomain", typeJson: "{\"primitive\":\"string\"}")]
        string PlayDomain
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
        /// </remarks>
        [JsiiProperty(name: "pushDomain", typeJson: "{\"primitive\":\"string\"}")]
        string PushDomain
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: region: Space belongs to the region, as a service center.
        /// </remarks>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
        string Region
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: app: Application name space used, the default live.
        /// </remarks>
        [JsiiProperty(name: "app", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? App
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: callback: Updating the space callback device / flow state
        /// </remarks>
        [JsiiProperty(name: "callback", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Callback
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Space description.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enabled: Space is enabled.
        /// </remarks>
        [JsiiProperty(name: "enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Enabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: lazyPull: Whether to enable on-demand pull flow, default false
        /// </remarks>
        [JsiiProperty(name: "lazyPull", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LazyPull
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VS::Group`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-vs.RosGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vs.IRosGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: inProtocol: Access protocol used by the space.
            /// Value: gb28181, rtmp
            /// </remarks>
            [JsiiProperty(name: "inProtocol", typeJson: "{\"primitive\":\"string\"}")]
            public string InProtocol
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: Space name.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: outProtocol: Play protocol used by the space, multivalued separated by commas.
            /// Value: flv, hls, rtmp
            /// </remarks>
            [JsiiProperty(name: "outProtocol", typeJson: "{\"primitive\":\"string\"}")]
            public string OutProtocol
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: playDomain: Use of the domain name space broadcast stream.
            /// </remarks>
            [JsiiProperty(name: "playDomain", typeJson: "{\"primitive\":\"string\"}")]
            public string PlayDomain
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
            /// </remarks>
            [JsiiProperty(name: "pushDomain", typeJson: "{\"primitive\":\"string\"}")]
            public string PushDomain
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: region: Space belongs to the region, as a service center.
            /// </remarks>
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
            public string Region
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: app: Application name space used, the default live.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "app", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? App
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: callback: Updating the space callback device / flow state
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "callback", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Callback
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Space description.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enabled: Space is enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Enabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: lazyPull: Whether to enable on-demand pull flow, default false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "lazyPull", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LazyPull
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
