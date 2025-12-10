using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `Page`.</summary>
    [JsiiInterface(nativeType: typeof(IPage), fullyQualifiedName: "@alicloud/ros-cdk-esa.IPage")]
    public interface IPage : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Content: The Base64-encoded content of the error page.</summary>
        /// <remarks>
        /// The content type is specified by the Content-Type field.
        /// </remarks>
        [JsiiProperty(name: "attrContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrContent
        {
            get;
        }

        /// <summary>Attribute ContentType: The Content-Type field in the HTTP header.</summary>
        [JsiiProperty(name: "attrContentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrContentType
        {
            get;
        }

        /// <summary>Attribute Description: The description of the custom error page.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute Kind: The type of the custom response page.</summary>
        [JsiiProperty(name: "attrKind", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKind
        {
            get;
        }

        /// <summary>Attribute PageId: The ID of the custom error page.</summary>
        [JsiiProperty(name: "attrPageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPageId
        {
            get;
        }

        /// <summary>Attribute PageName: The name of the custom response page.</summary>
        [JsiiProperty(name: "attrPageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPageName
        {
            get;
        }

        /// <summary>Attribute UpdateTime: The time when the custom error page was last modified.</summary>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdateTime
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.PageProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IPageProps Props
        {
            get;
        }

        /// <summary>Represents a `Page`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPage), fullyQualifiedName: "@alicloud/ros-cdk-esa.IPage")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IPage
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Content: The Base64-encoded content of the error page.</summary>
            /// <remarks>
            /// The content type is specified by the Content-Type field.
            /// </remarks>
            [JsiiProperty(name: "attrContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrContent
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ContentType: The Content-Type field in the HTTP header.</summary>
            [JsiiProperty(name: "attrContentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrContentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the custom error page.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Kind: The type of the custom response page.</summary>
            [JsiiProperty(name: "attrKind", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKind
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PageId: The ID of the custom error page.</summary>
            [JsiiProperty(name: "attrPageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PageName: The name of the custom response page.</summary>
            [JsiiProperty(name: "attrPageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdateTime: The time when the custom error page was last modified.</summary>
            [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.PageProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IPageProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IPageProps>()!;
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
