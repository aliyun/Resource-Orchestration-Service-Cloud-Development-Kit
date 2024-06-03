using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.OssDeployment
{
    /// <summary>Specifies bucket deployment source.</summary>
    /// <remarks>
    /// Usage:
    ///
    /// <code><![CDATA[
    ///  Source.bucket(bucketName, objectKey)
    ///  Source.asset('/local/path/to/directory')
    ///  Source.asset('/local/path/to/a/file.zip')
    ///  Source.data('hello/world/file.txt', 'Hello, world!')
    ///  Source.jsonData('config.json', { key: value })
    /// ]]></code>
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.OssDeployment.Source), fullyQualifiedName: "@alicloud/ros-cdk-ossdeployment.Source")]
    public class Source : DeputyBase
    {
        public Source(): base(_MakeDeputyProps())
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps()
        {
            return new DeputyProps(System.Array.Empty<object?>());
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Source(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Source(DeputyProps props): base(props)
        {
        }

        /// <summary>Uses a local file path as the source of the target bucket contents.</summary>
        /// <param name="path">The path to a local file or a directory.</param>
        /// <param name="options">Options for the Asset.</param>
        /// <remarks>
        /// ROS CDK will create a temporary bucket and upload the files you want to upload to it.
        /// Make sure that the region id you specify in synth and deploy is the same region id as the destination upload bucket.
        ///
        /// If the local asset is a .zip archive, make sure you trust the
        /// producer of the archive.
        /// </remarks>
        [JsiiMethod(name: "asset", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-ossdeployment.ISource\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The path to a local file or a directory.\"},\"name\":\"path\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"Options for the Asset.\"},\"name\":\"options\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-ossassets.AssetOptions\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.OssDeployment.ISource Asset(string path, AlibabaCloud.SDK.ROS.CDK.OssAssets.IAssetOptions? options = null)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.OssDeployment.ISource>(typeof(AlibabaCloud.SDK.ROS.CDK.OssDeployment.Source), new System.Type[]{typeof(string), typeof(AlibabaCloud.SDK.ROS.CDK.OssAssets.IAssetOptions)}, new object?[]{path, options})!;
        }

        /// <summary>Uses a file stored in an OSS bucket as the source for the destination bucket contents.</summary>
        /// <param name="bucket">The OSS Bucket.</param>
        /// <param name="objectKey">The path of.</param>
        /// <remarks>
        /// Make sure you trust the producer of the archive. The source bucket and the destination bucket must be in the same region.
        /// </remarks>
        [JsiiMethod(name: "bucket", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-ossdeployment.ISource\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The OSS Bucket.\"},\"name\":\"bucket\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.Bucket\"}]}}},{\"docs\":{\"summary\":\"The path of.\"},\"name\":\"objectKey\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.OssDeployment.ISource Bucket(object bucket, object objectKey)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (bucket)
                {
                    case string cast_c5879b:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_c5879b:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Oss.Bucket cast_c5879b:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_c5879b:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(bucket)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.Bucket).FullName}; received null", nameof(bucket));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(bucket)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.Bucket).FullName}; received {bucket.GetType().FullName}", nameof(bucket));
                }
                switch (objectKey)
                {
                    case string cast_7c41e4:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_7c41e4:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_7c41e4:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(objectKey)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(objectKey));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(objectKey)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {objectKey.GetType().FullName}", nameof(objectKey));
                }
            }
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.OssDeployment.ISource>(typeof(AlibabaCloud.SDK.ROS.CDK.OssDeployment.Source), new System.Type[]{typeof(object), typeof(object)}, new object[]{bucket, objectKey})!;
        }

        /// <summary>Deploys an object with the specified string contents into the bucket.</summary>
        /// <param name="objectKey">The destination OSS object key (relative to the root of the OSS deployment).</param>
        /// <param name="data">The data to be stored in the object.</param>
        /// <remarks>
        /// To store a JSON object use <c>Source.jsonData()</c>.
        /// </remarks>
        [JsiiMethod(name: "data", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-ossdeployment.ISource\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The destination OSS object key (relative to the root of the OSS deployment).\"},\"name\":\"objectKey\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"The data to be stored in the object.\"},\"name\":\"data\",\"type\":{\"primitive\":\"string\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.OssDeployment.ISource Data(string objectKey, string data)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.OssDeployment.ISource>(typeof(AlibabaCloud.SDK.ROS.CDK.OssDeployment.Source), new System.Type[]{typeof(string), typeof(string)}, new object[]{objectKey, data})!;
        }

        /// <summary>Deploys an object with the specified JSON object into the bucket.</summary>
        /// <param name="objectKey">The destination OSS object key (relative to the root of the OSS deployment).</param>
        /// <param name="obj">A JSON object.</param>
        [JsiiMethod(name: "jsonData", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-ossdeployment.ISource\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The destination OSS object key (relative to the root of the OSS deployment).\"},\"name\":\"objectKey\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"A JSON object.\"},\"name\":\"obj\",\"type\":{\"primitive\":\"any\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.OssDeployment.ISource JsonData(string objectKey, object obj)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.OssDeployment.ISource>(typeof(AlibabaCloud.SDK.ROS.CDK.OssDeployment.Source), new System.Type[]{typeof(string), typeof(object)}, new object[]{objectKey, obj})!;
        }
    }
}
