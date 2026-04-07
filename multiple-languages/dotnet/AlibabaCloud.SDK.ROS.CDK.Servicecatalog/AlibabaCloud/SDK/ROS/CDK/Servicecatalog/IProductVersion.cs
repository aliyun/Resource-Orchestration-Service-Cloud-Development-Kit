using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Servicecatalog
{
    /// <summary>Represents a `ProductVersion`.</summary>
    [JsiiInterface(nativeType: typeof(IProductVersion), fullyQualifiedName: "@alicloud/ros-cdk-servicecatalog.IProductVersion")]
    public interface IProductVersion : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Active: Specifies whether the product version is active.</summary>
        [JsiiProperty(name: "attrActive", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrActive
        {
            get;
        }

        /// <summary>Attribute CreateTime: The creation time of the product version.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Description: The description of the product version.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute Guidance: The recommendation information.</summary>
        [JsiiProperty(name: "attrGuidance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGuidance
        {
            get;
        }

        /// <summary>Attribute ProductId: The ID of the product to which the product version belongs.</summary>
        [JsiiProperty(name: "attrProductId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProductId
        {
            get;
        }

        /// <summary>Attribute ProductVersionId: The ID of the product version.</summary>
        [JsiiProperty(name: "attrProductVersionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProductVersionId
        {
            get;
        }

        /// <summary>Attribute ProductVersionName: The name of the product version.</summary>
        [JsiiProperty(name: "attrProductVersionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProductVersionName
        {
            get;
        }

        /// <summary>Attribute TemplateType: The type of the product template.</summary>
        [JsiiProperty(name: "attrTemplateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTemplateType
        {
            get;
        }

        /// <summary>Attribute TemplateUrl: The URL of the template.</summary>
        [JsiiProperty(name: "attrTemplateUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTemplateUrl
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-servicecatalog.ProductVersionProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Servicecatalog.IProductVersionProps Props
        {
            get;
        }

        /// <summary>Represents a `ProductVersion`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IProductVersion), fullyQualifiedName: "@alicloud/ros-cdk-servicecatalog.IProductVersion")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Servicecatalog.IProductVersion
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Active: Specifies whether the product version is active.</summary>
            [JsiiProperty(name: "attrActive", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrActive
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The creation time of the product version.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the product version.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Guidance: The recommendation information.</summary>
            [JsiiProperty(name: "attrGuidance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGuidance
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProductId: The ID of the product to which the product version belongs.</summary>
            [JsiiProperty(name: "attrProductId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProductId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProductVersionId: The ID of the product version.</summary>
            [JsiiProperty(name: "attrProductVersionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProductVersionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProductVersionName: The name of the product version.</summary>
            [JsiiProperty(name: "attrProductVersionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProductVersionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TemplateType: The type of the product template.</summary>
            [JsiiProperty(name: "attrTemplateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTemplateType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TemplateUrl: The URL of the template.</summary>
            [JsiiProperty(name: "attrTemplateUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTemplateUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-servicecatalog.ProductVersionProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Servicecatalog.IProductVersionProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Servicecatalog.IProductVersionProps>()!;
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
