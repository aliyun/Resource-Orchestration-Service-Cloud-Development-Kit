using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts.Datasource
{
    /// <summary>Represents a `SynchronizationJob`.</summary>
    [JsiiInterface(nativeType: typeof(ISynchronizationJob), fullyQualifiedName: "@alicloud/ros-cdk-dts.datasource.ISynchronizationJob")]
    public interface ISynchronizationJob : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The task creation time, which follows the yyyy-MM-ddTHH:mm:ssZ(UTC time).</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DestinationEndpointEngineName: The target database engine type.</summary>
        [JsiiProperty(name: "attrDestinationEndpointEngineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDestinationEndpointEngineName
        {
            get;
        }

        /// <summary>Attribute DestinationEndpointRegion: Region of source instance.</summary>
        [JsiiProperty(name: "attrDestinationEndpointRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDestinationEndpointRegion
        {
            get;
        }

        /// <summary>Attribute DtsInstanceId: Synchronization instance ID.</summary>
        [JsiiProperty(name: "attrDtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDtsInstanceId
        {
            get;
        }

        /// <summary>Attribute InstanceClass: The specification of the migration or synchronization instance.</summary>
        [JsiiProperty(name: "attrInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceClass
        {
            get;
        }

        /// <summary>Attribute PaymentType: The payment type of the resource.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute SourceEndpointEngineName: Source instance database engine type.</summary>
        [JsiiProperty(name: "attrSourceEndpointEngineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceEndpointEngineName
        {
            get;
        }

        /// <summary>Attribute SourceEndpointRegion: Region of source instance.</summary>
        [JsiiProperty(name: "attrSourceEndpointRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceEndpointRegion
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dts.datasource.SynchronizationJobProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.ISynchronizationJobProps Props
        {
            get;
        }

        /// <summary>Represents a `SynchronizationJob`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISynchronizationJob), fullyQualifiedName: "@alicloud/ros-cdk-dts.datasource.ISynchronizationJob")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.ISynchronizationJob
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The task creation time, which follows the yyyy-MM-ddTHH:mm:ssZ(UTC time).</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DestinationEndpointEngineName: The target database engine type.</summary>
            [JsiiProperty(name: "attrDestinationEndpointEngineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDestinationEndpointEngineName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DestinationEndpointRegion: Region of source instance.</summary>
            [JsiiProperty(name: "attrDestinationEndpointRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDestinationEndpointRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DtsInstanceId: Synchronization instance ID.</summary>
            [JsiiProperty(name: "attrDtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDtsInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceClass: The specification of the migration or synchronization instance.</summary>
            [JsiiProperty(name: "attrInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: The payment type of the resource.</summary>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceEndpointEngineName: Source instance database engine type.</summary>
            [JsiiProperty(name: "attrSourceEndpointEngineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceEndpointEngineName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceEndpointRegion: Region of source instance.</summary>
            [JsiiProperty(name: "attrSourceEndpointRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceEndpointRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dts.datasource.SynchronizationJobProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.ISynchronizationJobProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.ISynchronizationJobProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
