using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `OriginPool`.</summary>
    [JsiiInterface(nativeType: typeof(IOriginPool), fullyQualifiedName: "@alicloud/ros-cdk-esa.IOriginPool")]
    public interface IOriginPool : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Enabled: Whether the source address pool is enabled:.</summary>
        [JsiiProperty(name: "attrEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnabled
        {
            get;
        }

        /// <summary>Attribute OriginPoolId: OriginPool Id.</summary>
        [JsiiProperty(name: "attrOriginPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOriginPoolId
        {
            get;
        }

        /// <summary>Attribute OriginPoolName: The source address pool name.</summary>
        [JsiiProperty(name: "attrOriginPoolName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOriginPoolName
        {
            get;
        }

        /// <summary>Attribute Origins: The Source station information added to the source address pool.</summary>
        /// <remarks>
        /// Multiple Source stations use arrays to transfer values.
        /// </remarks>
        [JsiiProperty(name: "attrOrigins", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOrigins
        {
            get;
        }

        /// <summary>Attribute RecordName: The domain name assigned to the source address pool can be used as the source address recorded under the site.</summary>
        [JsiiProperty(name: "attrRecordName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRecordName
        {
            get;
        }

        /// <summary>Attribute ReferenceLBCount: How many load balancers are referenced.</summary>
        [JsiiProperty(name: "attrReferenceLbCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReferenceLbCount
        {
            get;
        }

        /// <summary>Attribute References: The source address pool is referred to when the source address pool is configured by the load balancer or recorded as the source station.</summary>
        [JsiiProperty(name: "attrReferences", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReferences
        {
            get;
        }

        /// <summary>Attribute SiteId: The site ID.</summary>
        [JsiiProperty(name: "attrSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSiteId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.OriginPoolProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IOriginPoolProps Props
        {
            get;
        }

        /// <summary>Represents a `OriginPool`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IOriginPool), fullyQualifiedName: "@alicloud/ros-cdk-esa.IOriginPool")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IOriginPool
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Enabled: Whether the source address pool is enabled:.</summary>
            [JsiiProperty(name: "attrEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OriginPoolId: OriginPool Id.</summary>
            [JsiiProperty(name: "attrOriginPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOriginPoolId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OriginPoolName: The source address pool name.</summary>
            [JsiiProperty(name: "attrOriginPoolName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOriginPoolName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Origins: The Source station information added to the source address pool.</summary>
            /// <remarks>
            /// Multiple Source stations use arrays to transfer values.
            /// </remarks>
            [JsiiProperty(name: "attrOrigins", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOrigins
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RecordName: The domain name assigned to the source address pool can be used as the source address recorded under the site.</summary>
            [JsiiProperty(name: "attrRecordName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRecordName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReferenceLBCount: How many load balancers are referenced.</summary>
            [JsiiProperty(name: "attrReferenceLbCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReferenceLbCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute References: The source address pool is referred to when the source address pool is configured by the load balancer or recorded as the source station.</summary>
            [JsiiProperty(name: "attrReferences", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReferences
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SiteId: The site ID.</summary>
            [JsiiProperty(name: "attrSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.OriginPoolProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IOriginPoolProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IOriginPoolProps>()!;
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
