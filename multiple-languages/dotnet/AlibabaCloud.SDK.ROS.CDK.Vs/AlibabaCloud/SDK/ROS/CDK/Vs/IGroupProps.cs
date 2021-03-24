using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vs
{
    /// <summary>Properties for defining a `ALIYUN::VS::Group`.</summary>
    [JsiiInterface(nativeType: typeof(IGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-vs.GroupProps")]
    public interface IGroupProps
    {
        /// <summary>Property inProtocol: Access protocol used by the space.</summary>
        /// <remarks>
        /// Value: gb28181, rtmp
        /// </remarks>
        [JsiiProperty(name: "inProtocol", typeJson: "{\"primitive\":\"string\"}")]
        string InProtocol
        {
            get;
        }

        /// <summary>Property name: Space name.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <summary>Property outProtocol: Play protocol used by the space, multivalued separated by commas.</summary>
        /// <remarks>
        /// Value: flv, hls, rtmp
        /// </remarks>
        [JsiiProperty(name: "outProtocol", typeJson: "{\"primitive\":\"string\"}")]
        string OutProtocol
        {
            get;
        }

        /// <summary>Property playDomain: Use of the domain name space broadcast stream.</summary>
        [JsiiProperty(name: "playDomain", typeJson: "{\"primitive\":\"string\"}")]
        string PlayDomain
        {
            get;
        }

        /// <summary>Property pushDomain: Plug flow domain name space to use.</summary>
        /// <remarks>
        /// (Only access to the space rtmp)
        /// </remarks>
        [JsiiProperty(name: "pushDomain", typeJson: "{\"primitive\":\"string\"}")]
        string PushDomain
        {
            get;
        }

        /// <summary>Property region: Space belongs to the region, as a service center.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
        string Region
        {
            get;
        }

        /// <summary>Property app: Application name space used, the default live.</summary>
        [JsiiProperty(name: "app", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? App
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property callback: Updating the space callback device / flow state.</summary>
        [JsiiProperty(name: "callback", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Callback
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Space description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
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

        /// <summary>Properties for defining a `ALIYUN::VS::Group`.</summary>
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
            [JsiiProperty(name: "inProtocol", typeJson: "{\"primitive\":\"string\"}")]
            public string InProtocol
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property name: Space name.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property outProtocol: Play protocol used by the space, multivalued separated by commas.</summary>
            /// <remarks>
            /// Value: flv, hls, rtmp
            /// </remarks>
            [JsiiProperty(name: "outProtocol", typeJson: "{\"primitive\":\"string\"}")]
            public string OutProtocol
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property playDomain: Use of the domain name space broadcast stream.</summary>
            [JsiiProperty(name: "playDomain", typeJson: "{\"primitive\":\"string\"}")]
            public string PlayDomain
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property pushDomain: Plug flow domain name space to use.</summary>
            /// <remarks>
            /// (Only access to the space rtmp)
            /// </remarks>
            [JsiiProperty(name: "pushDomain", typeJson: "{\"primitive\":\"string\"}")]
            public string PushDomain
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property region: Space belongs to the region, as a service center.</summary>
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
            public string Region
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property app: Application name space used, the default live.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "app", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? App
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property callback: Updating the space callback device / flow state.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "callback", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Callback
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property description: Space description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
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
