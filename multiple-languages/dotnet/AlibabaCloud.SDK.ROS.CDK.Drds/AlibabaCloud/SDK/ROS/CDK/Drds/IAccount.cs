using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds
{
    /// <summary>Represents a `Account`.</summary>
    [JsiiInterface(nativeType: typeof(IAccount), fullyQualifiedName: "@alicloud/ros-cdk-drds.IAccount")]
    public interface IAccount : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AccountType: Account type.</summary>
        [JsiiProperty(name: "attrAccountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccountType
        {
            get;
        }

        /// <summary>Attribute DbPrivileges: Database permission information.</summary>
        [JsiiProperty(name: "attrDbPrivileges", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbPrivileges
        {
            get;
        }

        /// <summary>Attribute Description: Account remarks.</summary>
        /// <remarks>
        /// The default value of the advanced account is <strong>Created by DRDS</strong>, and the normal account does not have any comments. Remarks can be customized in account management.
        /// </remarks>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute DrdsAccountName: The name of the account.</summary>
        [JsiiProperty(name: "attrDrdsAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDrdsAccountName
        {
            get;
        }

        /// <summary>Attribute Host: You can access the IP address of the database.</summary>
        /// <remarks>
        /// <note xmlns="http://www.w3.org/1999/xhtml"></note><strong>%</strong> indicates that any IP address can be accessed.
        /// </remarks>
        [JsiiProperty(name: "attrHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHost
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-drds.AccountProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Drds.IAccountProps Props
        {
            get;
        }

        /// <summary>Represents a `Account`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccount), fullyQualifiedName: "@alicloud/ros-cdk-drds.IAccount")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Drds.IAccount
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AccountType: Account type.</summary>
            [JsiiProperty(name: "attrAccountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccountType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbPrivileges: Database permission information.</summary>
            [JsiiProperty(name: "attrDbPrivileges", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbPrivileges
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: Account remarks.</summary>
            /// <remarks>
            /// The default value of the advanced account is <strong>Created by DRDS</strong>, and the normal account does not have any comments. Remarks can be customized in account management.
            /// </remarks>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DrdsAccountName: The name of the account.</summary>
            [JsiiProperty(name: "attrDrdsAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDrdsAccountName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Host: You can access the IP address of the database.</summary>
            /// <remarks>
            /// <note xmlns="http://www.w3.org/1999/xhtml"></note><strong>%</strong> indicates that any IP address can be accessed.
            /// </remarks>
            [JsiiProperty(name: "attrHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHost
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-drds.AccountProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Drds.IAccountProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Drds.IAccountProps>()!;
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
