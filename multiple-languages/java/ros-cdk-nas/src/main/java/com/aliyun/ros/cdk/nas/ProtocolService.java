package com.aliyun.ros.cdk.nas;

/**
 * A ROS resource type:  <code>ALIYUN::NAS::ProtocolService</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:49.420Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.ProtocolService")
public class ProtocolService extends com.aliyun.ros.cdk.core.Resource {

    protected ProtocolService(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ProtocolService(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::NAS::ProtocolService</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ProtocolService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.ProtocolServiceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::NAS::ProtocolService</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ProtocolService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.ProtocolServiceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute FileSystemId: File system ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFileSystemId() {
        return software.amazon.jsii.Kernel.get(this, "attrFileSystemId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ProtocolServiceId: Agreement cluster group ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProtocolServiceId() {
        return software.amazon.jsii.Kernel.get(this, "attrProtocolServiceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nas.ProtocolService}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nas.ProtocolService> {
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
        private final com.aliyun.ros.cdk.nas.ProtocolServiceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nas.ProtocolServiceProps.Builder();
        }

        /**
         * Property fileSystemId: File system ID.
         * <p>
         * @return {@code this}
         * @param fileSystemId Property fileSystemId: File system ID. This parameter is required.
         */
        public Builder fileSystemId(final java.lang.String fileSystemId) {
            this.props.fileSystemId(fileSystemId);
            return this;
        }
        /**
         * Property fileSystemId: File system ID.
         * <p>
         * @return {@code this}
         * @param fileSystemId Property fileSystemId: File system ID. This parameter is required.
         */
        public Builder fileSystemId(final com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
            this.props.fileSystemId(fileSystemId);
            return this;
        }

        /**
         * Property protocolSpec: The spec of protocol service.
         * <p>
         * Default: General. Values: General
         * <p>
         * @return {@code this}
         * @param protocolSpec Property protocolSpec: The spec of protocol service. This parameter is required.
         */
        public Builder protocolSpec(final java.lang.String protocolSpec) {
            this.props.protocolSpec(protocolSpec);
            return this;
        }
        /**
         * Property protocolSpec: The spec of protocol service.
         * <p>
         * Default: General. Values: General
         * <p>
         * @return {@code this}
         * @param protocolSpec Property protocolSpec: The spec of protocol service. This parameter is required.
         */
        public Builder protocolSpec(final com.aliyun.ros.cdk.core.IResolvable protocolSpec) {
            this.props.protocolSpec(protocolSpec);
            return this;
        }

        /**
         * Property protocolType: The protocol type of agreement service.
         * <p>
         * Ranges:
         * NFS: Agreement service supports NFS protocol access.
         * The default value: NFS.
         * <p>
         * @return {@code this}
         * @param protocolType Property protocolType: The protocol type of agreement service. This parameter is required.
         */
        public Builder protocolType(final java.lang.String protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }
        /**
         * Property protocolType: The protocol type of agreement service.
         * <p>
         * Ranges:
         * NFS: Agreement service supports NFS protocol access.
         * The default value: NFS.
         * <p>
         * @return {@code this}
         * @param protocolType Property protocolType: The protocol type of agreement service. This parameter is required.
         */
        public Builder protocolType(final com.aliyun.ros.cdk.core.IResolvable protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }

        /**
         * Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: Agreement service vswitchid.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: Agreement service vswitchid. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: Agreement service vswitchid.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: Agreement service vswitchid. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property description: Description of protocol service.The console shows the "protocol service name". limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
         * <p>
         * @return {@code this}
         * @param description Property description: Description of protocol service.The console shows the "protocol service name". limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-). This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of protocol service.The console shows the "protocol service name". limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
         * <p>
         * @return {@code this}
         * @param description Property description: Description of protocol service.The console shows the "protocol service name". limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-). This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property throughput: The bandwidth of the agreement service.
         * <p>
         * Unit: MB/S.
         * <p>
         * @return {@code this}
         * @param throughput Property throughput: The bandwidth of the agreement service. This parameter is required.
         */
        public Builder throughput(final java.lang.Number throughput) {
            this.props.throughput(throughput);
            return this;
        }
        /**
         * Property throughput: The bandwidth of the agreement service.
         * <p>
         * Unit: MB/S.
         * <p>
         * @return {@code this}
         * @param throughput Property throughput: The bandwidth of the agreement service. This parameter is required.
         */
        public Builder throughput(final com.aliyun.ros.cdk.core.IResolvable throughput) {
            this.props.throughput(throughput);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nas.ProtocolService}.
         */
        @Override
        public com.aliyun.ros.cdk.nas.ProtocolService build() {
            return new com.aliyun.ros.cdk.nas.ProtocolService(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
