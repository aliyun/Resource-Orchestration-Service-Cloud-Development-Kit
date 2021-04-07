using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `ALIYUN::DTS::SynchronizationJob`.</summary>
    [JsiiInterface(nativeType: typeof(ISynchronizationJobProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.SynchronizationJobProps")]
    public interface ISynchronizationJobProps
    {
        /// <summary>Property destinationEndpoint: Migration target configuration.</summary>
        [JsiiProperty(name: "destinationEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.DestinationEndpointProperty\"}]}}")]
        object DestinationEndpoint
        {
            get;
        }

        /// <summary>Property destRegion: Region where the synchronization target instance is located.</summary>
        [JsiiProperty(name: "destRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestRegion
        {
            get;
        }

        /// <summary>Property sourceEndpoint: Migration source configuration.</summary>
        [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.SourceEndpointProperty\"}]}}")]
        object SourceEndpoint
        {
            get;
        }

        /// <summary>Property sourceRegion: Region where the synchronization source instance is located.</summary>
        [JsiiProperty(name: "sourceRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceRegion
        {
            get;
        }

        /// <summary>Property synchronizationJobClass: Synchronous instance specifications, which can be: micro, small, medium, large and so on.</summary>
        /// <remarks>
        /// The default value is: small
        /// </remarks>
        [JsiiProperty(name: "synchronizationJobClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SynchronizationJobClass
        {
            get;
        }

        /// <summary>Property dataInitialization: Whether to perform full data initialization before synchronization.</summary>
        /// <remarks>
        /// The values include:true: means full data initialization
        /// false: no full data initialization
        /// The default value is: true
        /// </remarks>
        [JsiiProperty(name: "dataInitialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataInitialization
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkType: When synchronization geographies, the type of data transmission network used.</summary>
        /// <remarks>
        /// Value include: Internet, Intranet. The default value is: Internet
        /// </remarks>
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property payType: Payment type, which include: Postpaid: postpaid type, Prepaid: Prepaid type.</summary>
        /// <remarks>
        /// Default is Postpaid
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PayType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be: Year: Annual, Month: monthly.</summary>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property structureInitialization: Whether to initialize the structure object before synchronization.</summary>
        /// <remarks>
        /// The values include:true: indicates that the structure object is initialized
        /// false: no result object initialization
        /// The default value is: true
        /// </remarks>
        [JsiiProperty(name: "structureInitialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StructureInitialization
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property synchronizationObjects: Objects that need to be synchronized.</summary>
        [JsiiProperty(name: "synchronizationObjects", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.SynchronizationObjectsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SynchronizationObjects
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-&gt; MySQL synchronization, this parameter can receive the value bidirectional.</summary>
        [JsiiProperty(name: "topology", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Topology
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed.</summary>
        [JsiiProperty(name: "usedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UsedTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::DTS::SynchronizationJob`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISynchronizationJobProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.SynchronizationJobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.ISynchronizationJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property destinationEndpoint: Migration target configuration.</summary>
            [JsiiProperty(name: "destinationEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.DestinationEndpointProperty\"}]}}")]
            public object DestinationEndpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property destRegion: Region where the synchronization target instance is located.</summary>
            [JsiiProperty(name: "destRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceEndpoint: Migration source configuration.</summary>
            [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.SourceEndpointProperty\"}]}}")]
            public object SourceEndpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceRegion: Region where the synchronization source instance is located.</summary>
            [JsiiProperty(name: "sourceRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property synchronizationJobClass: Synchronous instance specifications, which can be: micro, small, medium, large and so on.</summary>
            /// <remarks>
            /// The default value is: small
            /// </remarks>
            [JsiiProperty(name: "synchronizationJobClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SynchronizationJobClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dataInitialization: Whether to perform full data initialization before synchronization.</summary>
            /// <remarks>
            /// The values include:true: means full data initialization
            /// false: no full data initialization
            /// The default value is: true
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataInitialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataInitialization
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkType: When synchronization geographies, the type of data transmission network used.</summary>
            /// <remarks>
            /// Value include: Internet, Intranet. The default value is: Internet
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property payType: Payment type, which include: Postpaid: postpaid type, Prepaid: Prepaid type.</summary>
            /// <remarks>
            /// Default is Postpaid
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PayType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be: Year: Annual, Month: monthly.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property structureInitialization: Whether to initialize the structure object before synchronization.</summary>
            /// <remarks>
            /// The values include:true: indicates that the structure object is initialized
            /// false: no result object initialization
            /// The default value is: true
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "structureInitialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StructureInitialization
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property synchronizationObjects: Objects that need to be synchronized.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "synchronizationObjects", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.SynchronizationObjectsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SynchronizationObjects
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-&gt; MySQL synchronization, this parameter can receive the value bidirectional.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "topology", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Topology
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "usedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UsedTime
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
