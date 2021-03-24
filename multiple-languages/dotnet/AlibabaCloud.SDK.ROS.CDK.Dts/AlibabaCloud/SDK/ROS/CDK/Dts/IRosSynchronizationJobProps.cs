using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `ALIYUN::DTS::SynchronizationJob`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSynchronizationJobProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJobProps")]
    public interface IRosSynchronizationJobProps
    {
        /// <remarks>
        /// <strong>Property</strong>: destinationEndpoint: Migration target configuration
        /// </remarks>
        [JsiiProperty(name: "destinationEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.DestinationEndpointProperty\"}]}}")]
        object DestinationEndpoint
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destRegion: Region where the synchronization target instance is located.
        /// </remarks>
        [JsiiProperty(name: "destRegion", typeJson: "{\"primitive\":\"string\"}")]
        string DestRegion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceEndpoint: Migration source configuration
        /// </remarks>
        [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.SourceEndpointProperty\"}]}}")]
        object SourceEndpoint
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceRegion: Region where the synchronization source instance is located.
        /// </remarks>
        [JsiiProperty(name: "sourceRegion", typeJson: "{\"primitive\":\"string\"}")]
        string SourceRegion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: synchronizationJobClass: Synchronous instance specifications, which can be:
        /// micro, small, medium, large and so on. The default value is: small
        /// </remarks>
        [JsiiProperty(name: "synchronizationJobClass", typeJson: "{\"primitive\":\"string\"}")]
        string SynchronizationJobClass
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dataInitialization: Whether to perform full data initialization before synchronization. The values include:true: means full data initialization
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

        /// <remarks>
        /// <strong>Property</strong>: networkType: When synchronization geographies, the type of data transmission network used. Value include: Internet, Intranet. The default value is: Internet
        /// </remarks>
        [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NetworkType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: Payment type, which include:
        /// Postpaid: postpaid type, Prepaid: Prepaid type. Default is Postpaid
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PayType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be:
        /// Year: Annual, Month: monthly
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Period
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: structureInitialization: Whether to initialize the structure object before synchronization. The values include:true: indicates that the structure object is initialized
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

        /// <remarks>
        /// <strong>Property</strong>: synchronizationObjects: Objects that need to be synchronized
        /// </remarks>
        [JsiiProperty(name: "synchronizationObjects", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.SynchronizationObjectsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SynchronizationObjects
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional
        /// </remarks>
        [JsiiProperty(name: "topology", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Topology
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed
        /// </remarks>
        [JsiiProperty(name: "usedTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? UsedTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::DTS::SynchronizationJob`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSynchronizationJobProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.IRosSynchronizationJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpoint: Migration target configuration
            /// </remarks>
            [JsiiProperty(name: "destinationEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.DestinationEndpointProperty\"}]}}")]
            public object DestinationEndpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destRegion: Region where the synchronization target instance is located.
            /// </remarks>
            [JsiiProperty(name: "destRegion", typeJson: "{\"primitive\":\"string\"}")]
            public string DestRegion
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceEndpoint: Migration source configuration
            /// </remarks>
            [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.SourceEndpointProperty\"}]}}")]
            public object SourceEndpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceRegion: Region where the synchronization source instance is located.
            /// </remarks>
            [JsiiProperty(name: "sourceRegion", typeJson: "{\"primitive\":\"string\"}")]
            public string SourceRegion
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: synchronizationJobClass: Synchronous instance specifications, which can be:
            /// micro, small, medium, large and so on. The default value is: small
            /// </remarks>
            [JsiiProperty(name: "synchronizationJobClass", typeJson: "{\"primitive\":\"string\"}")]
            public string SynchronizationJobClass
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dataInitialization: Whether to perform full data initialization before synchronization. The values include:true: means full data initialization
            /// false: no full data initialization
            /// The default value is: true
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataInitialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataInitialization
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: networkType: When synchronization geographies, the type of data transmission network used. Value include: Internet, Intranet. The default value is: Internet
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NetworkType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: payType: Payment type, which include:
            /// Postpaid: postpaid type, Prepaid: Prepaid type. Default is Postpaid
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PayType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be:
            /// Year: Annual, Month: monthly
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Period
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: structureInitialization: Whether to initialize the structure object before synchronization. The values include:true: indicates that the structure object is initialized
            /// false: no result object initialization
            /// The default value is: true
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "structureInitialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StructureInitialization
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: synchronizationObjects: Objects that need to be synchronized
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "synchronizationObjects", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.SynchronizationObjectsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SynchronizationObjects
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "topology", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Topology
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "usedTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? UsedTime
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
