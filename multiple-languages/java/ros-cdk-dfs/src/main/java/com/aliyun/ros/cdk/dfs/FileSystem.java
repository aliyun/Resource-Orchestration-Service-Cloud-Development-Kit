package com.aliyun.ros.cdk.dfs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DFS::FileSystem</code>, which is used to create a file system.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:50.833Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dfs.$Module.class, fqn = "@alicloud/ros-cdk-dfs.FileSystem")
public class FileSystem extends com.aliyun.ros.cdk.core.Resource {

    protected FileSystem(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FileSystem(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public FileSystem(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dfs.FileSystemProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public FileSystem(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dfs.FileSystemProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute FileSystemId: The ID of the file system.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFileSystemId() {
        return software.amazon.jsii.Kernel.get(this, "attrFileSystemId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dfs.FileSystemProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dfs.FileSystemProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dfs.FileSystemProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dfs.FileSystem}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dfs.FileSystem> {
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
        private final com.aliyun.ros.cdk.dfs.FileSystemProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dfs.FileSystemProps.Builder();
        }

        /**
         * Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）.
         * <p>
         * @return {@code this}
         * @param protocolType Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）. This parameter is required.
         */
        public Builder protocolType(final java.lang.String protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }
        /**
         * Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）.
         * <p>
         * @return {@code this}
         * @param protocolType Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）. This parameter is required.
         */
        public Builder protocolType(final com.aliyun.ros.cdk.core.IResolvable protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }

        /**
         * Property spaceCapacity: Capacity of the file system.
         * <p>
         * When the actual data volume reaches the file system capacity, data cannot be written.
         * Unit: GB
         * <p>
         * @return {@code this}
         * @param spaceCapacity Property spaceCapacity: Capacity of the file system. This parameter is required.
         */
        public Builder spaceCapacity(final java.lang.Number spaceCapacity) {
            this.props.spaceCapacity(spaceCapacity);
            return this;
        }
        /**
         * Property spaceCapacity: Capacity of the file system.
         * <p>
         * When the actual data volume reaches the file system capacity, data cannot be written.
         * Unit: GB
         * <p>
         * @return {@code this}
         * @param spaceCapacity Property spaceCapacity: Capacity of the file system. This parameter is required.
         */
        public Builder spaceCapacity(final com.aliyun.ros.cdk.core.IResolvable spaceCapacity) {
            this.props.spaceCapacity(spaceCapacity);
            return this;
        }

        /**
         * Property storageType: Type of storage media.
         * <p>
         * Values:
         * STANDARD (default) : standard type.
         * PERFORMANCE: performance type.
         * <p>
         * @return {@code this}
         * @param storageType Property storageType: Type of storage media. This parameter is required.
         */
        public Builder storageType(final java.lang.String storageType) {
            this.props.storageType(storageType);
            return this;
        }
        /**
         * Property storageType: Type of storage media.
         * <p>
         * Values:
         * STANDARD (default) : standard type.
         * PERFORMANCE: performance type.
         * <p>
         * @return {@code this}
         * @param storageType Property storageType: Type of storage media. This parameter is required.
         */
        public Builder storageType(final com.aliyun.ros.cdk.core.IResolvable storageType) {
            this.props.storageType(storageType);
            return this;
        }

        /**
         * Property zoneId: zone id.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: zone id. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: zone id.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: zone id. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property dataRedundancyType: Redundancy mode of the file system.
         * <p>
         * Values:
         * LRS (default) : local redundancy.
         * ZRS: in-city redundancy.
         * <p>
         * @return {@code this}
         * @param dataRedundancyType Property dataRedundancyType: Redundancy mode of the file system. This parameter is required.
         */
        public Builder dataRedundancyType(final java.lang.String dataRedundancyType) {
            this.props.dataRedundancyType(dataRedundancyType);
            return this;
        }
        /**
         * Property dataRedundancyType: Redundancy mode of the file system.
         * <p>
         * Values:
         * LRS (default) : local redundancy.
         * ZRS: in-city redundancy.
         * <p>
         * @return {@code this}
         * @param dataRedundancyType Property dataRedundancyType: Redundancy mode of the file system. This parameter is required.
         */
        public Builder dataRedundancyType(final com.aliyun.ros.cdk.core.IResolvable dataRedundancyType) {
            this.props.dataRedundancyType(dataRedundancyType);
            return this;
        }

        /**
         * Property description: The description of the file system.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the file system. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the file system.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the file system. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property fileSystemName: Name of the file system.
         * <p>
         * The naming rules are as follows:
         * The value contains 6 to 100 characters.
         * Globally unique and cannot be an empty string.
         * The value can contain letters and digits and underscores (_).
         * <p>
         * @return {@code this}
         * @param fileSystemName Property fileSystemName: Name of the file system. This parameter is required.
         */
        public Builder fileSystemName(final java.lang.String fileSystemName) {
            this.props.fileSystemName(fileSystemName);
            return this;
        }
        /**
         * Property fileSystemName: Name of the file system.
         * <p>
         * The naming rules are as follows:
         * The value contains 6 to 100 characters.
         * Globally unique and cannot be an empty string.
         * The value can contain letters and digits and underscores (_).
         * <p>
         * @return {@code this}
         * @param fileSystemName Property fileSystemName: Name of the file system. This parameter is required.
         */
        public Builder fileSystemName(final com.aliyun.ros.cdk.core.IResolvable fileSystemName) {
            this.props.fileSystemName(fileSystemName);
            return this;
        }

        /**
         * Property partitionNumber: The reserved parameters.
         * <p>
         * @return {@code this}
         * @param partitionNumber Property partitionNumber: The reserved parameters. This parameter is required.
         */
        public Builder partitionNumber(final java.lang.Number partitionNumber) {
            this.props.partitionNumber(partitionNumber);
            return this;
        }
        /**
         * Property partitionNumber: The reserved parameters.
         * <p>
         * @return {@code this}
         * @param partitionNumber Property partitionNumber: The reserved parameters. This parameter is required.
         */
        public Builder partitionNumber(final com.aliyun.ros.cdk.core.IResolvable partitionNumber) {
            this.props.partitionNumber(partitionNumber);
            return this;
        }

        /**
         * Property provisionedThroughputInMiBps: Preset handling capacity.
         * <p>
         * Unit: MB/sdata range: 1-5120
         * <p>
         * @return {@code this}
         * @param provisionedThroughputInMiBps Property provisionedThroughputInMiBps: Preset handling capacity. This parameter is required.
         */
        public Builder provisionedThroughputInMiBps(final java.lang.Number provisionedThroughputInMiBps) {
            this.props.provisionedThroughputInMiBps(provisionedThroughputInMiBps);
            return this;
        }
        /**
         * Property provisionedThroughputInMiBps: Preset handling capacity.
         * <p>
         * Unit: MB/sdata range: 1-5120
         * <p>
         * @return {@code this}
         * @param provisionedThroughputInMiBps Property provisionedThroughputInMiBps: Preset handling capacity. This parameter is required.
         */
        public Builder provisionedThroughputInMiBps(final com.aliyun.ros.cdk.core.IResolvable provisionedThroughputInMiBps) {
            this.props.provisionedThroughputInMiBps(provisionedThroughputInMiBps);
            return this;
        }

        /**
         * Property storageSetName: The reserved parameters.
         * <p>
         * @return {@code this}
         * @param storageSetName Property storageSetName: The reserved parameters. This parameter is required.
         */
        public Builder storageSetName(final java.lang.String storageSetName) {
            this.props.storageSetName(storageSetName);
            return this;
        }
        /**
         * Property storageSetName: The reserved parameters.
         * <p>
         * @return {@code this}
         * @param storageSetName Property storageSetName: The reserved parameters. This parameter is required.
         */
        public Builder storageSetName(final com.aliyun.ros.cdk.core.IResolvable storageSetName) {
            this.props.storageSetName(storageSetName);
            return this;
        }

        /**
         * Property throughputMode: Throughput mode Values: Standard（default）: standard throughputProvisioned: preset throughput.
         * <p>
         * @return {@code this}
         * @param throughputMode Property throughputMode: Throughput mode Values: Standard（default）: standard throughputProvisioned: preset throughput. This parameter is required.
         */
        public Builder throughputMode(final java.lang.String throughputMode) {
            this.props.throughputMode(throughputMode);
            return this;
        }
        /**
         * Property throughputMode: Throughput mode Values: Standard（default）: standard throughputProvisioned: preset throughput.
         * <p>
         * @return {@code this}
         * @param throughputMode Property throughputMode: Throughput mode Values: Standard（default）: standard throughputProvisioned: preset throughput. This parameter is required.
         */
        public Builder throughputMode(final com.aliyun.ros.cdk.core.IResolvable throughputMode) {
            this.props.throughputMode(throughputMode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dfs.FileSystem}.
         */
        @Override
        public com.aliyun.ros.cdk.dfs.FileSystem build() {
            return new com.aliyun.ros.cdk.dfs.FileSystem(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
