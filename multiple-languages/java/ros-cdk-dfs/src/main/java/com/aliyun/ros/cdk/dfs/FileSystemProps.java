package com.aliyun.ros.cdk.dfs;

/**
 * Properties for defining a <code>FileSystem</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-filesystem
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:14.004Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dfs.$Module.class, fqn = "@alicloud/ros-cdk-dfs.FileSystemProps")
@software.amazon.jsii.Jsii.Proxy(FileSystemProps.Jsii$Proxy.class)
public interface FileSystemProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtocolType();

    /**
     * Property spaceCapacity: Capacity of the file system.
     * <p>
     * When the actual data volume reaches the file system capacity, data cannot be written.
     * Unit: GB
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSpaceCapacity();

    /**
     * Property storageType: Type of storage media.
     * <p>
     * Values:
     * STANDARD (default) : standard type.
     * PERFORMANCE: performance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStorageType();

    /**
     * Property zoneId: zone id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property dataRedundancyType: Redundancy mode of the file system.
     * <p>
     * Values:
     * LRS (default) : local redundancy.
     * ZRS: in-city redundancy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataRedundancyType() {
        return null;
    }

    /**
     * Property description: The description of the file system.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property fileSystemName: Name of the file system.
     * <p>
     * The naming rules are as follows:
     * The value contains 6 to 100 characters.
     * Globally unique and cannot be an empty string.
     * The value can contain letters and digits and underscores (_).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFileSystemName() {
        return null;
    }

    /**
     * Property partitionNumber: The reserved parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPartitionNumber() {
        return null;
    }

    /**
     * Property provisionedThroughputInMiBps: Preset handling capacity.
     * <p>
     * Unit: MB/sdata range: 1-5120
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProvisionedThroughputInMiBps() {
        return null;
    }

    /**
     * Property storageSetName: The reserved parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageSetName() {
        return null;
    }

    /**
     * Property throughputMode: Throughput mode Values: Standard（default）: standard throughputProvisioned: preset throughput.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getThroughputMode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link FileSystemProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link FileSystemProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<FileSystemProps> {
        java.lang.Object protocolType;
        java.lang.Object spaceCapacity;
        java.lang.Object storageType;
        java.lang.Object zoneId;
        java.lang.Object dataRedundancyType;
        java.lang.Object description;
        java.lang.Object fileSystemName;
        java.lang.Object partitionNumber;
        java.lang.Object provisionedThroughputInMiBps;
        java.lang.Object storageSetName;
        java.lang.Object throughputMode;

        /**
         * Sets the value of {@link FileSystemProps#getProtocolType}
         * @param protocolType Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）. This parameter is required.
         * @return {@code this}
         */
        public Builder protocolType(java.lang.String protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getProtocolType}
         * @param protocolType Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）. This parameter is required.
         * @return {@code this}
         */
        public Builder protocolType(com.aliyun.ros.cdk.core.IResolvable protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getSpaceCapacity}
         * @param spaceCapacity Property spaceCapacity: Capacity of the file system. This parameter is required.
         *                      When the actual data volume reaches the file system capacity, data cannot be written.
         *                      Unit: GB
         * @return {@code this}
         */
        public Builder spaceCapacity(java.lang.Number spaceCapacity) {
            this.spaceCapacity = spaceCapacity;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getSpaceCapacity}
         * @param spaceCapacity Property spaceCapacity: Capacity of the file system. This parameter is required.
         *                      When the actual data volume reaches the file system capacity, data cannot be written.
         *                      Unit: GB
         * @return {@code this}
         */
        public Builder spaceCapacity(com.aliyun.ros.cdk.core.IResolvable spaceCapacity) {
            this.spaceCapacity = spaceCapacity;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getStorageType}
         * @param storageType Property storageType: Type of storage media. This parameter is required.
         *                    Values:
         *                    STANDARD (default) : standard type.
         *                    PERFORMANCE: performance type.
         * @return {@code this}
         */
        public Builder storageType(java.lang.String storageType) {
            this.storageType = storageType;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getStorageType}
         * @param storageType Property storageType: Type of storage media. This parameter is required.
         *                    Values:
         *                    STANDARD (default) : standard type.
         *                    PERFORMANCE: performance type.
         * @return {@code this}
         */
        public Builder storageType(com.aliyun.ros.cdk.core.IResolvable storageType) {
            this.storageType = storageType;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getZoneId}
         * @param zoneId Property zoneId: zone id. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getZoneId}
         * @param zoneId Property zoneId: zone id. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getDataRedundancyType}
         * @param dataRedundancyType Property dataRedundancyType: Redundancy mode of the file system.
         *                           Values:
         *                           LRS (default) : local redundancy.
         *                           ZRS: in-city redundancy.
         * @return {@code this}
         */
        public Builder dataRedundancyType(java.lang.String dataRedundancyType) {
            this.dataRedundancyType = dataRedundancyType;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getDataRedundancyType}
         * @param dataRedundancyType Property dataRedundancyType: Redundancy mode of the file system.
         *                           Values:
         *                           LRS (default) : local redundancy.
         *                           ZRS: in-city redundancy.
         * @return {@code this}
         */
        public Builder dataRedundancyType(com.aliyun.ros.cdk.core.IResolvable dataRedundancyType) {
            this.dataRedundancyType = dataRedundancyType;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getDescription}
         * @param description Property description: The description of the file system.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getDescription}
         * @param description Property description: The description of the file system.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getFileSystemName}
         * @param fileSystemName Property fileSystemName: Name of the file system.
         *                       The naming rules are as follows:
         *                       The value contains 6 to 100 characters.
         *                       Globally unique and cannot be an empty string.
         *                       The value can contain letters and digits and underscores (_).
         * @return {@code this}
         */
        public Builder fileSystemName(java.lang.String fileSystemName) {
            this.fileSystemName = fileSystemName;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getFileSystemName}
         * @param fileSystemName Property fileSystemName: Name of the file system.
         *                       The naming rules are as follows:
         *                       The value contains 6 to 100 characters.
         *                       Globally unique and cannot be an empty string.
         *                       The value can contain letters and digits and underscores (_).
         * @return {@code this}
         */
        public Builder fileSystemName(com.aliyun.ros.cdk.core.IResolvable fileSystemName) {
            this.fileSystemName = fileSystemName;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getPartitionNumber}
         * @param partitionNumber Property partitionNumber: The reserved parameters.
         * @return {@code this}
         */
        public Builder partitionNumber(java.lang.Number partitionNumber) {
            this.partitionNumber = partitionNumber;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getPartitionNumber}
         * @param partitionNumber Property partitionNumber: The reserved parameters.
         * @return {@code this}
         */
        public Builder partitionNumber(com.aliyun.ros.cdk.core.IResolvable partitionNumber) {
            this.partitionNumber = partitionNumber;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getProvisionedThroughputInMiBps}
         * @param provisionedThroughputInMiBps Property provisionedThroughputInMiBps: Preset handling capacity.
         *                                     Unit: MB/sdata range: 1-5120
         * @return {@code this}
         */
        public Builder provisionedThroughputInMiBps(java.lang.Number provisionedThroughputInMiBps) {
            this.provisionedThroughputInMiBps = provisionedThroughputInMiBps;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getProvisionedThroughputInMiBps}
         * @param provisionedThroughputInMiBps Property provisionedThroughputInMiBps: Preset handling capacity.
         *                                     Unit: MB/sdata range: 1-5120
         * @return {@code this}
         */
        public Builder provisionedThroughputInMiBps(com.aliyun.ros.cdk.core.IResolvable provisionedThroughputInMiBps) {
            this.provisionedThroughputInMiBps = provisionedThroughputInMiBps;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getStorageSetName}
         * @param storageSetName Property storageSetName: The reserved parameters.
         * @return {@code this}
         */
        public Builder storageSetName(java.lang.String storageSetName) {
            this.storageSetName = storageSetName;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getStorageSetName}
         * @param storageSetName Property storageSetName: The reserved parameters.
         * @return {@code this}
         */
        public Builder storageSetName(com.aliyun.ros.cdk.core.IResolvable storageSetName) {
            this.storageSetName = storageSetName;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getThroughputMode}
         * @param throughputMode Property throughputMode: Throughput mode Values: Standard（default）: standard throughputProvisioned: preset throughput.
         * @return {@code this}
         */
        public Builder throughputMode(java.lang.String throughputMode) {
            this.throughputMode = throughputMode;
            return this;
        }

        /**
         * Sets the value of {@link FileSystemProps#getThroughputMode}
         * @param throughputMode Property throughputMode: Throughput mode Values: Standard（default）: standard throughputProvisioned: preset throughput.
         * @return {@code this}
         */
        public Builder throughputMode(com.aliyun.ros.cdk.core.IResolvable throughputMode) {
            this.throughputMode = throughputMode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link FileSystemProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public FileSystemProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link FileSystemProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FileSystemProps {
        private final java.lang.Object protocolType;
        private final java.lang.Object spaceCapacity;
        private final java.lang.Object storageType;
        private final java.lang.Object zoneId;
        private final java.lang.Object dataRedundancyType;
        private final java.lang.Object description;
        private final java.lang.Object fileSystemName;
        private final java.lang.Object partitionNumber;
        private final java.lang.Object provisionedThroughputInMiBps;
        private final java.lang.Object storageSetName;
        private final java.lang.Object throughputMode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.protocolType = software.amazon.jsii.Kernel.get(this, "protocolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spaceCapacity = software.amazon.jsii.Kernel.get(this, "spaceCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageType = software.amazon.jsii.Kernel.get(this, "storageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataRedundancyType = software.amazon.jsii.Kernel.get(this, "dataRedundancyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fileSystemName = software.amazon.jsii.Kernel.get(this, "fileSystemName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.partitionNumber = software.amazon.jsii.Kernel.get(this, "partitionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.provisionedThroughputInMiBps = software.amazon.jsii.Kernel.get(this, "provisionedThroughputInMiBps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageSetName = software.amazon.jsii.Kernel.get(this, "storageSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.throughputMode = software.amazon.jsii.Kernel.get(this, "throughputMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.protocolType = java.util.Objects.requireNonNull(builder.protocolType, "protocolType is required");
            this.spaceCapacity = java.util.Objects.requireNonNull(builder.spaceCapacity, "spaceCapacity is required");
            this.storageType = java.util.Objects.requireNonNull(builder.storageType, "storageType is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.dataRedundancyType = builder.dataRedundancyType;
            this.description = builder.description;
            this.fileSystemName = builder.fileSystemName;
            this.partitionNumber = builder.partitionNumber;
            this.provisionedThroughputInMiBps = builder.provisionedThroughputInMiBps;
            this.storageSetName = builder.storageSetName;
            this.throughputMode = builder.throughputMode;
        }

        @Override
        public final java.lang.Object getProtocolType() {
            return this.protocolType;
        }

        @Override
        public final java.lang.Object getSpaceCapacity() {
            return this.spaceCapacity;
        }

        @Override
        public final java.lang.Object getStorageType() {
            return this.storageType;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getDataRedundancyType() {
            return this.dataRedundancyType;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getFileSystemName() {
            return this.fileSystemName;
        }

        @Override
        public final java.lang.Object getPartitionNumber() {
            return this.partitionNumber;
        }

        @Override
        public final java.lang.Object getProvisionedThroughputInMiBps() {
            return this.provisionedThroughputInMiBps;
        }

        @Override
        public final java.lang.Object getStorageSetName() {
            return this.storageSetName;
        }

        @Override
        public final java.lang.Object getThroughputMode() {
            return this.throughputMode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("protocolType", om.valueToTree(this.getProtocolType()));
            data.set("spaceCapacity", om.valueToTree(this.getSpaceCapacity()));
            data.set("storageType", om.valueToTree(this.getStorageType()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getDataRedundancyType() != null) {
                data.set("dataRedundancyType", om.valueToTree(this.getDataRedundancyType()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getFileSystemName() != null) {
                data.set("fileSystemName", om.valueToTree(this.getFileSystemName()));
            }
            if (this.getPartitionNumber() != null) {
                data.set("partitionNumber", om.valueToTree(this.getPartitionNumber()));
            }
            if (this.getProvisionedThroughputInMiBps() != null) {
                data.set("provisionedThroughputInMiBps", om.valueToTree(this.getProvisionedThroughputInMiBps()));
            }
            if (this.getStorageSetName() != null) {
                data.set("storageSetName", om.valueToTree(this.getStorageSetName()));
            }
            if (this.getThroughputMode() != null) {
                data.set("throughputMode", om.valueToTree(this.getThroughputMode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dfs.FileSystemProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            FileSystemProps.Jsii$Proxy that = (FileSystemProps.Jsii$Proxy) o;

            if (!protocolType.equals(that.protocolType)) return false;
            if (!spaceCapacity.equals(that.spaceCapacity)) return false;
            if (!storageType.equals(that.storageType)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.dataRedundancyType != null ? !this.dataRedundancyType.equals(that.dataRedundancyType) : that.dataRedundancyType != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.fileSystemName != null ? !this.fileSystemName.equals(that.fileSystemName) : that.fileSystemName != null) return false;
            if (this.partitionNumber != null ? !this.partitionNumber.equals(that.partitionNumber) : that.partitionNumber != null) return false;
            if (this.provisionedThroughputInMiBps != null ? !this.provisionedThroughputInMiBps.equals(that.provisionedThroughputInMiBps) : that.provisionedThroughputInMiBps != null) return false;
            if (this.storageSetName != null ? !this.storageSetName.equals(that.storageSetName) : that.storageSetName != null) return false;
            return this.throughputMode != null ? this.throughputMode.equals(that.throughputMode) : that.throughputMode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.protocolType.hashCode();
            result = 31 * result + (this.spaceCapacity.hashCode());
            result = 31 * result + (this.storageType.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.dataRedundancyType != null ? this.dataRedundancyType.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.fileSystemName != null ? this.fileSystemName.hashCode() : 0);
            result = 31 * result + (this.partitionNumber != null ? this.partitionNumber.hashCode() : 0);
            result = 31 * result + (this.provisionedThroughputInMiBps != null ? this.provisionedThroughputInMiBps.hashCode() : 0);
            result = 31 * result + (this.storageSetName != null ? this.storageSetName.hashCode() : 0);
            result = 31 * result + (this.throughputMode != null ? this.throughputMode.hashCode() : 0);
            return result;
        }
    }
}
