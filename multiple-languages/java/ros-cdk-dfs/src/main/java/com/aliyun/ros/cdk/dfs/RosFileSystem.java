package com.aliyun.ros.cdk.dfs;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DFS::FileSystem</code>, which is used to create a file system.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:05.685Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dfs.$Module.class, fqn = "@alicloud/ros-cdk-dfs.RosFileSystem")
public class RosFileSystem extends com.aliyun.ros.cdk.core.RosResource {

    protected RosFileSystem(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosFileSystem(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dfs.RosFileSystem.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosFileSystem(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dfs.RosFileSystemProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFileSystemId() {
        return software.amazon.jsii.Kernel.get(this, "attrFileSystemId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProtocolType() {
        return software.amazon.jsii.Kernel.get(this, "protocolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProtocolType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "protocolType", java.util.Objects.requireNonNull(value, "protocolType is required"));
    }

    /**
     */
    public void setProtocolType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "protocolType", java.util.Objects.requireNonNull(value, "protocolType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSpaceCapacity() {
        return software.amazon.jsii.Kernel.get(this, "spaceCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpaceCapacity(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "spaceCapacity", java.util.Objects.requireNonNull(value, "spaceCapacity is required"));
    }

    /**
     */
    public void setSpaceCapacity(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spaceCapacity", java.util.Objects.requireNonNull(value, "spaceCapacity is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getStorageType() {
        return software.amazon.jsii.Kernel.get(this, "storageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStorageType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "storageType", java.util.Objects.requireNonNull(value, "storageType is required"));
    }

    /**
     */
    public void setStorageType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "storageType", java.util.Objects.requireNonNull(value, "storageType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", java.util.Objects.requireNonNull(value, "zoneId is required"));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", java.util.Objects.requireNonNull(value, "zoneId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDataRedundancyType() {
        return software.amazon.jsii.Kernel.get(this, "dataRedundancyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataRedundancyType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dataRedundancyType", value);
    }

    /**
     */
    public void setDataRedundancyType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataRedundancyType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFileSystemName() {
        return software.amazon.jsii.Kernel.get(this, "fileSystemName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFileSystemName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "fileSystemName", value);
    }

    /**
     */
    public void setFileSystemName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fileSystemName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPartitionNumber() {
        return software.amazon.jsii.Kernel.get(this, "partitionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPartitionNumber(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "partitionNumber", value);
    }

    /**
     */
    public void setPartitionNumber(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "partitionNumber", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProvisionedThroughputInMiBps() {
        return software.amazon.jsii.Kernel.get(this, "provisionedThroughputInMiBps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProvisionedThroughputInMiBps(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "provisionedThroughputInMiBps", value);
    }

    /**
     */
    public void setProvisionedThroughputInMiBps(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "provisionedThroughputInMiBps", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStorageSetName() {
        return software.amazon.jsii.Kernel.get(this, "storageSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStorageSetName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "storageSetName", value);
    }

    /**
     */
    public void setStorageSetName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "storageSetName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getThroughputMode() {
        return software.amazon.jsii.Kernel.get(this, "throughputMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setThroughputMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "throughputMode", value);
    }

    /**
     */
    public void setThroughputMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "throughputMode", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dfs.RosFileSystem}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dfs.RosFileSystem> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.dfs.RosFileSystemProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dfs.RosFileSystemProps.Builder();
        }

        /**
         * @return {@code this}
         * @param protocolType This parameter is required.
         */
        public Builder protocolType(final java.lang.String protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }
        /**
         * @return {@code this}
         * @param protocolType This parameter is required.
         */
        public Builder protocolType(final com.aliyun.ros.cdk.core.IResolvable protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }

        /**
         * @return {@code this}
         * @param spaceCapacity This parameter is required.
         */
        public Builder spaceCapacity(final java.lang.Number spaceCapacity) {
            this.props.spaceCapacity(spaceCapacity);
            return this;
        }
        /**
         * @return {@code this}
         * @param spaceCapacity This parameter is required.
         */
        public Builder spaceCapacity(final com.aliyun.ros.cdk.core.IResolvable spaceCapacity) {
            this.props.spaceCapacity(spaceCapacity);
            return this;
        }

        /**
         * @return {@code this}
         * @param storageType This parameter is required.
         */
        public Builder storageType(final java.lang.String storageType) {
            this.props.storageType(storageType);
            return this;
        }
        /**
         * @return {@code this}
         * @param storageType This parameter is required.
         */
        public Builder storageType(final com.aliyun.ros.cdk.core.IResolvable storageType) {
            this.props.storageType(storageType);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataRedundancyType This parameter is required.
         */
        public Builder dataRedundancyType(final java.lang.String dataRedundancyType) {
            this.props.dataRedundancyType(dataRedundancyType);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataRedundancyType This parameter is required.
         */
        public Builder dataRedundancyType(final com.aliyun.ros.cdk.core.IResolvable dataRedundancyType) {
            this.props.dataRedundancyType(dataRedundancyType);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param fileSystemName This parameter is required.
         */
        public Builder fileSystemName(final java.lang.String fileSystemName) {
            this.props.fileSystemName(fileSystemName);
            return this;
        }
        /**
         * @return {@code this}
         * @param fileSystemName This parameter is required.
         */
        public Builder fileSystemName(final com.aliyun.ros.cdk.core.IResolvable fileSystemName) {
            this.props.fileSystemName(fileSystemName);
            return this;
        }

        /**
         * @return {@code this}
         * @param partitionNumber This parameter is required.
         */
        public Builder partitionNumber(final java.lang.Number partitionNumber) {
            this.props.partitionNumber(partitionNumber);
            return this;
        }
        /**
         * @return {@code this}
         * @param partitionNumber This parameter is required.
         */
        public Builder partitionNumber(final com.aliyun.ros.cdk.core.IResolvable partitionNumber) {
            this.props.partitionNumber(partitionNumber);
            return this;
        }

        /**
         * @return {@code this}
         * @param provisionedThroughputInMiBps This parameter is required.
         */
        public Builder provisionedThroughputInMiBps(final java.lang.Number provisionedThroughputInMiBps) {
            this.props.provisionedThroughputInMiBps(provisionedThroughputInMiBps);
            return this;
        }
        /**
         * @return {@code this}
         * @param provisionedThroughputInMiBps This parameter is required.
         */
        public Builder provisionedThroughputInMiBps(final com.aliyun.ros.cdk.core.IResolvable provisionedThroughputInMiBps) {
            this.props.provisionedThroughputInMiBps(provisionedThroughputInMiBps);
            return this;
        }

        /**
         * @return {@code this}
         * @param storageSetName This parameter is required.
         */
        public Builder storageSetName(final java.lang.String storageSetName) {
            this.props.storageSetName(storageSetName);
            return this;
        }
        /**
         * @return {@code this}
         * @param storageSetName This parameter is required.
         */
        public Builder storageSetName(final com.aliyun.ros.cdk.core.IResolvable storageSetName) {
            this.props.storageSetName(storageSetName);
            return this;
        }

        /**
         * @return {@code this}
         * @param throughputMode This parameter is required.
         */
        public Builder throughputMode(final java.lang.String throughputMode) {
            this.props.throughputMode(throughputMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param throughputMode This parameter is required.
         */
        public Builder throughputMode(final com.aliyun.ros.cdk.core.IResolvable throughputMode) {
            this.props.throughputMode(throughputMode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dfs.RosFileSystem}.
         */
        @Override
        public com.aliyun.ros.cdk.dfs.RosFileSystem build() {
            return new com.aliyun.ros.cdk.dfs.RosFileSystem(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
