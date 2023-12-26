package com.aliyun.ros.cdk.oss;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::OSS::Directory</code>DATASOURCE::OSS::Buckets is used to query an Object Storage Service (OSS) bucket.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:17.096Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.Directory")
public class Directory extends com.aliyun.ros.cdk.core.Resource {

    protected Directory(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Directory(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Directory(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.DirectoryProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Directory(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.DirectoryProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BucketName: The name of Bucket.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBucketName() {
        return software.amazon.jsii.Kernel.get(this, "attrBucketName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DirectoryName: The name of Directory.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDirectoryName() {
        return software.amazon.jsii.Kernel.get(this, "attrDirectoryName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oss.Directory}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oss.Directory> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.oss.DirectoryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oss.DirectoryProps.Builder();
        }

        /**
         * Property bucketName: bucket name.
         * <p>
         * @return {@code this}
         * @param bucketName Property bucketName: bucket name. This parameter is required.
         */
        public Builder bucketName(final java.lang.String bucketName) {
            this.props.bucketName(bucketName);
            return this;
        }
        /**
         * Property bucketName: bucket name.
         * <p>
         * @return {@code this}
         * @param bucketName Property bucketName: bucket name. This parameter is required.
         */
        public Builder bucketName(final com.aliyun.ros.cdk.core.IResolvable bucketName) {
            this.props.bucketName(bucketName);
            return this;
        }

        /**
         * Property directoryName: Directory name.
         * <p>
         * @return {@code this}
         * @param directoryName Property directoryName: Directory name. This parameter is required.
         */
        public Builder directoryName(final java.lang.String directoryName) {
            this.props.directoryName(directoryName);
            return this;
        }
        /**
         * Property directoryName: Directory name.
         * <p>
         * @return {@code this}
         * @param directoryName Property directoryName: Directory name. This parameter is required.
         */
        public Builder directoryName(final com.aliyun.ros.cdk.core.IResolvable directoryName) {
            this.props.directoryName(directoryName);
            return this;
        }

        /**
         * Property deletionForce: Whether force delete the relative objects in the directory.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force delete the relative objects in the directory. This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * Property deletionForce: Whether force delete the relative objects in the directory.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force delete the relative objects in the directory. This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oss.Directory}.
         */
        @Override
        public com.aliyun.ros.cdk.oss.Directory build() {
            return new com.aliyun.ros.cdk.oss.Directory(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
