using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Represents a `Database`.</summary>
    [JsiiInterface(nativeType: typeof(IDatabase), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.IDatabase")]
    public interface IDatabase : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AccessPrivilege: Permission Control Information.</summary>
        [JsiiProperty(name: "attrAccessPrivilege", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccessPrivilege
        {
            get;
        }

        /// <summary>Attribute CharacterSetName: Character set, default value is UTF8.</summary>
        [JsiiProperty(name: "attrCharacterSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCharacterSetName
        {
            get;
        }

        /// <summary>Attribute Collate: Database locale parameters, specifying string comparison/collation.</summary>
        [JsiiProperty(name: "attrCollate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCollate
        {
            get;
        }

        /// <summary>Attribute ConnLimit: Maximum connection limit,-1 means unrestricted.</summary>
        [JsiiProperty(name: "attrConnLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConnLimit
        {
            get;
        }

        /// <summary>Attribute Ctype: Database locale parameters, specifying character classification/case conversion rules.</summary>
        [JsiiProperty(name: "attrCtype", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCtype
        {
            get;
        }

        /// <summary>Attribute DatabaseName: Database Name.</summary>
        [JsiiProperty(name: "attrDatabaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDatabaseName
        {
            get;
        }

        /// <summary>Attribute DBInstanceId: Instance ID.</summary>
        [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceId
        {
            get;
        }

        /// <summary>Attribute Description: Database Description.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute Owner: Data Sheet owner.</summary>
        [JsiiProperty(name: "attrOwner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOwner
        {
            get;
        }

        /// <summary>Attribute Size: Database size.</summary>
        [JsiiProperty(name: "attrSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSize
        {
            get;
        }

        /// <summary>Attribute TableSpace: Database table space.</summary>
        [JsiiProperty(name: "attrTableSpace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTableSpace
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-gpdb.DatabaseProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Gpdb.IDatabaseProps Props
        {
            get;
        }

        /// <summary>Represents a `Database`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDatabase), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.IDatabase")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IDatabase
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AccessPrivilege: Permission Control Information.</summary>
            [JsiiProperty(name: "attrAccessPrivilege", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccessPrivilege
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CharacterSetName: Character set, default value is UTF8.</summary>
            [JsiiProperty(name: "attrCharacterSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCharacterSetName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Collate: Database locale parameters, specifying string comparison/collation.</summary>
            [JsiiProperty(name: "attrCollate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCollate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConnLimit: Maximum connection limit,-1 means unrestricted.</summary>
            [JsiiProperty(name: "attrConnLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConnLimit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ctype: Database locale parameters, specifying character classification/case conversion rules.</summary>
            [JsiiProperty(name: "attrCtype", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCtype
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DatabaseName: Database Name.</summary>
            [JsiiProperty(name: "attrDatabaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDatabaseName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBInstanceId: Instance ID.</summary>
            [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: Database Description.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Owner: Data Sheet owner.</summary>
            [JsiiProperty(name: "attrOwner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOwner
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Size: Database size.</summary>
            [JsiiProperty(name: "attrSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TableSpace: Database table space.</summary>
            [JsiiProperty(name: "attrTableSpace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTableSpace
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-gpdb.DatabaseProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Gpdb.IDatabaseProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Gpdb.IDatabaseProps>()!;
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
