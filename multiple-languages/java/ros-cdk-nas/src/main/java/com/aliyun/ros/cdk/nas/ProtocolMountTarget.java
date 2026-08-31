package com.aliyun.ros.cdk.nas;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::NAS::ProtocolMountTarget</code>Creates an export directory for a NAS protocol service.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T10:15:39.335Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.ProtocolMountTarget")
public class ProtocolMountTarget extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.nas.IProtocolMountTarget {

    protected ProtocolMountTarget(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ProtocolMountTarget(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ProtocolMountTarget(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.ProtocolMountTargetProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ProtocolMountTarget(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.ProtocolMountTargetProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ExportId: The protocol service exports directory ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExportId() {
        return software.amazon.jsii.Kernel.get(this, "attrExportId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FileSystemId: File system ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileSystemId() {
        return software.amazon.jsii.Kernel.get(this, "attrFileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProtocolMountTargetDomain: The protocol mount target domain.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocolMountTargetDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrProtocolMountTargetDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProtocolServiceId: Protocol service ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocolServiceId() {
        return software.amazon.jsii.Kernel.get(this, "attrProtocolServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.ProtocolMountTargetProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nas.ProtocolMountTargetProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
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
         * Property vSwitchId: The vSwitch ID of the export directory.
         * <p>
         * If the storage redundancy type of the file system is not zone-redundant (ZRS) and
         * the VpcId is set, this field is required.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch ID of the export directory. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The vSwitch ID of the export directory.
         * <p>
         * If the storage redundancy type of the file system is not zone-redundant (ZRS) and
         * the VpcId is set, this field is required.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch ID of the export directory. This parameter is required.
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
         * Property description: The description of the export directory for the protocol service.
         * <p>
         * The name of the
         * export directory appears in the console.
         * Limits:
         * <p>
         * <ul>
         * <li>The description must be 2 to 128 characters in length.</li>
         * <li>The description must start with a letter but cannot start with <code>http:\/\/</code> or
         * <code>https:\/\/</code>.</li>
         * <li>The description can contain letters, digits, colons (:), underscores (_), and
         * hyphens (-).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the export directory for the protocol service. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the export directory for the protocol service.
         * <p>
         * The name of the
         * export directory appears in the console.
         * Limits:
         * <p>
         * <ul>
         * <li>The description must be 2 to 128 characters in length.</li>
         * <li>The description must start with a letter but cannot start with <code>http:\/\/</code> or
         * <code>https:\/\/</code>.</li>
         * <li>The description can contain letters, digits, colons (:), underscores (_), and
         * hyphens (-).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the export directory for the protocol service. This parameter is required.
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
         * Property path: The path of the CPFS directory that you want to export.
         * <p>
         * Limits:
         * <p>
         * <ul>
         * <li>The directory already exists in the CPFS file system.</li>
         * <li>You can create only one export directory for a directory.</li>
         * <li>You can specify either a fileset or a path.
         * Format:</li>
         * <li>The path must be 1 to 1,024 characters in length.</li>
         * <li>The path must be encoded in UTF-8.</li>
         * <li>The path must start and end with a forward slash (/). The root directory is
         * <code>\/</code>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param path Property path: The path of the CPFS directory that you want to export. This parameter is required.
         */
        public Builder path(final java.lang.String path) {
            this.props.path(path);
            return this;
        }
        /**
         * Property path: The path of the CPFS directory that you want to export.
         * <p>
         * Limits:
         * <p>
         * <ul>
         * <li>The directory already exists in the CPFS file system.</li>
         * <li>You can create only one export directory for a directory.</li>
         * <li>You can specify either a fileset or a path.
         * Format:</li>
         * <li>The path must be 1 to 1,024 characters in length.</li>
         * <li>The path must be encoded in UTF-8.</li>
         * <li>The path must start and end with a forward slash (/). The root directory is
         * <code>\/</code>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param path Property path: The path of the CPFS directory that you want to export. This parameter is required.
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
