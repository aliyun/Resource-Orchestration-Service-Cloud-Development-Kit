using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `SiteDeliveryTask`.</summary>
    [JsiiInterface(nativeType: typeof(ISiteDeliveryTask), fullyQualifiedName: "@alicloud/ros-cdk-esa.ISiteDeliveryTask")]
    public interface ISiteDeliveryTask : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BusinessType: Real-time log type.</summary>
        [JsiiProperty(name: "attrBusinessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBusinessType
        {
            get;
        }

        /// <summary>Attribute DataCenter: Data Center.</summary>
        [JsiiProperty(name: "attrDataCenter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDataCenter
        {
            get;
        }

        /// <summary>Attribute DeliveryType: Delivery Type:.</summary>
        [JsiiProperty(name: "attrDeliveryType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeliveryType
        {
            get;
        }

        /// <summary>Attribute DiscardRate: If the discard rate is not filled, the default value is 0.</summary>
        [JsiiProperty(name: "attrDiscardRate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiscardRate
        {
            get;
        }

        /// <summary>Attribute FieldName: The list of delivery fields to be modified, separated by commas.</summary>
        [JsiiProperty(name: "attrFieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFieldName
        {
            get;
        }

        /// <summary>Attribute FilterRules: The filtering rules.</summary>
        [JsiiProperty(name: "attrFilterRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFilterRules
        {
            get;
        }

        /// <summary>Attribute SinkConfig: The delivery configuration.</summary>
        [JsiiProperty(name: "attrSinkConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSinkConfig
        {
            get;
        }

        /// <summary>Attribute SiteId: The site ID.</summary>
        [JsiiProperty(name: "attrSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSiteId
        {
            get;
        }

        /// <summary>Attribute SiteName: The website name.</summary>
        [JsiiProperty(name: "attrSiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSiteName
        {
            get;
        }

        /// <summary>Attribute TaskName: The task name.</summary>
        [JsiiProperty(name: "attrTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTaskName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.SiteDeliveryTaskProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.ISiteDeliveryTaskProps Props
        {
            get;
        }

        /// <summary>Represents a `SiteDeliveryTask`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISiteDeliveryTask), fullyQualifiedName: "@alicloud/ros-cdk-esa.ISiteDeliveryTask")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.ISiteDeliveryTask
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BusinessType: Real-time log type.</summary>
            [JsiiProperty(name: "attrBusinessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBusinessType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DataCenter: Data Center.</summary>
            [JsiiProperty(name: "attrDataCenter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDataCenter
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeliveryType: Delivery Type:.</summary>
            [JsiiProperty(name: "attrDeliveryType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeliveryType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiscardRate: If the discard rate is not filled, the default value is 0.</summary>
            [JsiiProperty(name: "attrDiscardRate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiscardRate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FieldName: The list of delivery fields to be modified, separated by commas.</summary>
            [JsiiProperty(name: "attrFieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFieldName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FilterRules: The filtering rules.</summary>
            [JsiiProperty(name: "attrFilterRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFilterRules
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SinkConfig: The delivery configuration.</summary>
            [JsiiProperty(name: "attrSinkConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSinkConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SiteId: The site ID.</summary>
            [JsiiProperty(name: "attrSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SiteName: The website name.</summary>
            [JsiiProperty(name: "attrSiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSiteName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TaskName: The task name.</summary>
            [JsiiProperty(name: "attrTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTaskName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.SiteDeliveryTaskProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.ISiteDeliveryTaskProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.ISiteDeliveryTaskProps>()!;
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
