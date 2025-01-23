using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mobi
{
    /// <summary>Represents a `App`.</summary>
    [JsiiInterface(nativeType: typeof(IApp), fullyQualifiedName: "@alicloud/ros-cdk-mobi.IApp")]
    public interface IApp : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AppDescription: Description of application.</summary>
        [JsiiProperty(name: "attrAppDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAppDescription
        {
            get;
        }

        /// <summary>Attribute AppIcon: Application icon label, The system provides an icon by default, which is given in the form of a label.</summary>
        /// <remarks>
        /// The default value is -1.
        /// </remarks>
        [JsiiProperty(name: "attrAppIcon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAppIcon
        {
            get;
        }

        /// <summary>Attribute AppId: Application ID.</summary>
        [JsiiProperty(name: "attrAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAppId
        {
            get;
        }

        /// <summary>Attribute AppName: The application name.</summary>
        [JsiiProperty(name: "attrAppName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAppName
        {
            get;
        }

        /// <summary>Attribute AppType: The application type.</summary>
        /// <remarks>
        /// Web applications and Copilot applications are supported.
        /// </remarks>
        [JsiiProperty(name: "attrAppType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAppType
        {
            get;
        }

        /// <summary>Attribute AppWorkspaceId: Workspace ID of application, The application belongs to the workspace.</summary>
        [JsiiProperty(name: "attrAppWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAppWorkspaceId
        {
            get;
        }

        /// <summary>Attribute CreateTime: Create time of application.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute ModifiedTime: Modified time of application.</summary>
        [JsiiProperty(name: "attrModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrModifiedTime
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mobi.AppProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mobi.IAppProps Props
        {
            get;
        }

        /// <summary>Represents a `App`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IApp), fullyQualifiedName: "@alicloud/ros-cdk-mobi.IApp")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mobi.IApp
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AppDescription: Description of application.</summary>
            [JsiiProperty(name: "attrAppDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAppDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AppIcon: Application icon label, The system provides an icon by default, which is given in the form of a label.</summary>
            /// <remarks>
            /// The default value is -1.
            /// </remarks>
            [JsiiProperty(name: "attrAppIcon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAppIcon
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AppId: Application ID.</summary>
            [JsiiProperty(name: "attrAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAppId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AppName: The application name.</summary>
            [JsiiProperty(name: "attrAppName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAppName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AppType: The application type.</summary>
            /// <remarks>
            /// Web applications and Copilot applications are supported.
            /// </remarks>
            [JsiiProperty(name: "attrAppType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAppType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AppWorkspaceId: Workspace ID of application, The application belongs to the workspace.</summary>
            [JsiiProperty(name: "attrAppWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAppWorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: Create time of application.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ModifiedTime: Modified time of application.</summary>
            [JsiiProperty(name: "attrModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrModifiedTime
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mobi.AppProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mobi.IAppProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mobi.IAppProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
