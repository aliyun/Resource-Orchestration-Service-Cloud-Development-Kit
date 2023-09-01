package com.aliyun.ros.cdk.nas;

/**
 * A ROS resource type:  <code>ALIYUN::NAS::ProtocolMountTarget</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:38.449Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.ProtocolMountTarget")
public class ProtocolMountTarget extends com.aliyun.ros.cdk.core.Resource {

    protected ProtocolMountTarget(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ProtocolMountTarget(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::NAS::ProtocolMountTarget</code>.
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
    public ProtocolMountTarget(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.ProtocolMountTargetProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::NAS::ProtocolMountTarget</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ProtocolMountTarget(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.ProtocolMountTargetProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ExportId: The protocol service exports directory ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExportId() {
        return software.amazon.jsii.Kernel.get(this, "attrExportId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute FileSystemId: File system ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFileSystemId() {
        return software.amazon.jsii.Kernel.get(this, "attrFileSystemId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ProtocolMountTargetDomain: The protocol mount target domain.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProtocolMountTargetDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrProtocolMountTargetDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ProtocolServiceId: Protocol service ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProtocolServiceId() {
        return software.amazon.jsii.Kernel.get(this, "attrProtocolServiceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nas.ProtocolMountTarget}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nas.ProtocolMountTarget> {
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
        private final com.aliyun.ros.cdk.nas.ProtocolMountTargetProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nas.ProtocolMountTargetProps.Builder();
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
         * Property protocolServiceId: Agreement service ID.
         * <p>
         * @return {@code this}
         * @param protocolServiceId Property protocolServiceId: Agreement service ID. This parameter is required.
         */
        public Builder protocolServiceId(final java.lang.String protocolServiceId) {
            this.props.protocolServiceId(protocolServiceId);
            return this;
        }
        /**
         * Property protocolServiceId: Agreement service ID.
         * <p>
         * @return {@code this}
         * @param protocolServiceId Property protocolServiceId: Agreement service ID. This parameter is required.
         */
        public Builder protocolServiceId(final com.aliyun.ros.cdk.core.IResolvable protocolServiceId) {
            this.props.protocolServiceId(protocolServiceId);
            return this;
        }

        /**
         * Property vpcId: Proper network ID exported by the protocol service.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: Proper network ID exported by the protocol service. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: Proper network ID exported by the protocol service.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: Proper network ID exported by the protocol service. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: Switch ID exported by the protocol service.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: Switch ID exported by the protocol service. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: Switch ID exported by the protocol service.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: Switch ID exported by the protocol service. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property accessGroupName: The name of the permissions group.
         * <p>
         * Default value: DEFAULT_VPC_GROUP_NAME
         * <p>
         * @return {@code this}
         * @param accessGroupName Property accessGroupName: The name of the permissions group. This parameter is required.
         */
        public Builder accessGroupName(final java.lang.String accessGroupName) {
            this.props.accessGroupName(accessGroupName);
            return this;
        }
        /**
         * Property accessGroupName: The name of the permissions group.
         * <p>
         * Default value: DEFAULT_VPC_GROUP_NAME
         * <p>
         * @return {@code this}
         * @param accessGroupName Property accessGroupName: The name of the permissions group. This parameter is required.
         */
        public Builder accessGroupName(final com.aliyun.ros.cdk.core.IResolvable accessGroupName) {
            this.props.accessGroupName(accessGroupName);
            return this;
        }

        /**
         * Property description: Description of the protocol service to export the directory.The console is displayed as the export directory name. limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the protocol service to export the directory.The console is displayed as the export directory name. limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-). This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the protocol service to export the directory.The console is displayed as the export directory name. limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the protocol service to export the directory.The console is displayed as the export directory name. limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-). This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property fsetId: Fileset ID needs to be exported.
         * <p>
         * limit:
         * The Fileset must exist.
         * A Fileset allows only one export directory.
         * Fileset and Path can only specify one.
         * <p>
         * @return {@code this}
         * @param fsetId Property fsetId: Fileset ID needs to be exported. This parameter is required.
         */
        public Builder fsetId(final java.lang.String fsetId) {
            this.props.fsetId(fsetId);
            return this;
        }
        /**
         * Property fsetId: Fileset ID needs to be exported.
         * <p>
         * limit:
         * The Fileset must exist.
         * A Fileset allows only one export directory.
         * Fileset and Path can only specify one.
         * <p>
         * @return {@code this}
         * @param fsetId Property fsetId: Fileset ID needs to be exported. This parameter is required.
         */
        public Builder fsetId(final com.aliyun.ros.cdk.core.IResolvable fsetId) {
            this.props.fsetId(fsetId);
            return this;
        }

        /**
         * Property path: The path of the CPFS directory that needs to be exported.
         * <p>
         * limit:
         * This directory must be existing directory on CPFS.
         * The same directory allows only one export.
         * Fileset and Path can only specify one.
         * Format:
         * The length is 1 to 1024 characters.
         * Use UTF-8 encoding.
         * It must start with the positive oblique line (/), and the root directory must be/.
         * <p>
         * @return {@code this}
         * @param path Property path: The path of the CPFS directory that needs to be exported. This parameter is required.
         */
        public Builder path(final java.lang.String path) {
            this.props.path(path);
            return this;
        }
        /**
         * Property path: The path of the CPFS directory that needs to be exported.
         * <p>
         * limit:
         * This directory must be existing directory on CPFS.
         * The same directory allows only one export.
         * Fileset and Path can only specify one.
         * Format:
         * The length is 1 to 1024 characters.
         * Use UTF-8 encoding.
         * It must start with the positive oblique line (/), and the root directory must be/.
         * <p>
         * @return {@code this}
         * @param path Property path: The path of the CPFS directory that needs to be exported. This parameter is required.
         */
        public Builder path(final com.aliyun.ros.cdk.core.IResolvable path) {
            this.props.path(path);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nas.ProtocolMountTarget}.
         */
        @Override
        public com.aliyun.ros.cdk.nas.ProtocolMountTarget build() {
            return new com.aliyun.ros.cdk.nas.ProtocolMountTarget(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
