package com.aliyun.ros.cdk.nas;

/**
 * Properties for defining a `ALIYUN::NAS::FileSystem`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.130Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.RosFileSystemProps")
@software.amazon.jsii.Jsii.Proxy(RosFileSystemProps.Jsii$Proxy.class)
public interface RosFileSystemProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getProtocolType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getStorageType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getBandwidth() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getCapacity() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getDuration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getEncryptType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFileSystemType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSnapshotId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVpcId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosFileSystemProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosFileSystemProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosFileSystemProps> {
        private java.lang.String protocolType;
        private java.lang.String storageType;
        private java.lang.Number bandwidth;
        private java.lang.Number capacity;
        private java.lang.String chargeType;
        private java.lang.Object deletionForce;
        private java.lang.String description;
        private java.lang.Number duration;
        private java.lang.Number encryptType;
        private java.lang.String fileSystemType;
        private java.lang.String snapshotId;
        private java.lang.String vpcId;
        private java.lang.String vSwitchId;
        private java.lang.String zoneId;

        /**
         * Sets the value of {@link RosFileSystemProps#getProtocolType}
         * @param protocolType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder protocolType(java.lang.String protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemProps#getStorageType}
         * @param storageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder storageType(java.lang.String storageType) {
            this.storageType = storageType;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemProps#getBandwidth}
         * @param bandwidth the value to be set.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemProps#getCapacity}
         * @param capacity the value to be set.
         * @return {@code this}
         */
        public Builder capacity(java.lang.Number capacity) {
            this.capacity = capacity;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemProps#getChargeType}
         * @param chargeType the value to be set.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemProps#getDeletionForce}
         * @param deletionForce the value to be set.
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemProps#getDeletionForce}
         * @param deletionForce the value to be set.
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemProps#getDuration}
         * @param duration the value to be set.
         * @return {@code this}
         */
        public Builder duration(java.lang.Number duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemProps#getEncryptType}
         * @param encryptType the value to be set.
         * @return {@code this}
         */
        public Builder encryptType(java.lang.Number encryptType) {
            this.encryptType = encryptType;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemProps#getFileSystemType}
         * @param fileSystemType the value to be set.
         * @return {@code this}
         */
        public Builder fileSystemType(java.lang.String fileSystemType) {
            this.fileSystemType = fileSystemType;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemProps#getSnapshotId}
         * @param snapshotId the value to be set.
         * @return {@code this}
         */
        public Builder snapshotId(java.lang.String snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosFileSystemProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosFileSystemProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosFileSystemProps build() {
            return new Jsii$Proxy(protocolType, storageType, bandwidth, capacity, chargeType, deletionForce, description, duration, encryptType, fileSystemType, snapshotId, vpcId, vSwitchId, zoneId);
        }
    }

    /**
     * An implementation for {@link RosFileSystemProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosFileSystemProps {
        private final java.lang.String protocolType;
        private final java.lang.String storageType;
        private final java.lang.Number bandwidth;
        private final java.lang.Number capacity;
        private final java.lang.String chargeType;
        private final java.lang.Object deletionForce;
        private final java.lang.String description;
        private final java.lang.Number duration;
        private final java.lang.Number encryptType;
        private final java.lang.String fileSystemType;
        private final java.lang.String snapshotId;
        private final java.lang.String vpcId;
        private final java.lang.String vSwitchId;
        private final java.lang.String zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.protocolType = software.amazon.jsii.Kernel.get(this, "protocolType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.storageType = software.amazon.jsii.Kernel.get(this, "storageType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.capacity = software.amazon.jsii.Kernel.get(this, "capacity", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.encryptType = software.amazon.jsii.Kernel.get(this, "encryptType", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.fileSystemType = software.amazon.jsii.Kernel.get(this, "fileSystemType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.snapshotId = software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String protocolType, final java.lang.String storageType, final java.lang.Number bandwidth, final java.lang.Number capacity, final java.lang.String chargeType, final java.lang.Object deletionForce, final java.lang.String description, final java.lang.Number duration, final java.lang.Number encryptType, final java.lang.String fileSystemType, final java.lang.String snapshotId, final java.lang.String vpcId, final java.lang.String vSwitchId, final java.lang.String zoneId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.protocolType = java.util.Objects.requireNonNull(protocolType, "protocolType is required");
            this.storageType = java.util.Objects.requireNonNull(storageType, "storageType is required");
            this.bandwidth = bandwidth;
            this.capacity = capacity;
            this.chargeType = chargeType;
            this.deletionForce = deletionForce;
            this.description = description;
            this.duration = duration;
            this.encryptType = encryptType;
            this.fileSystemType = fileSystemType;
            this.snapshotId = snapshotId;
            this.vpcId = vpcId;
            this.vSwitchId = vSwitchId;
            this.zoneId = zoneId;
        }

        @Override
        public final java.lang.String getProtocolType() {
            return this.protocolType;
        }

        @Override
        public final java.lang.String getStorageType() {
            return this.storageType;
        }

        @Override
        public final java.lang.Number getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Number getCapacity() {
            return this.capacity;
        }

        @Override
        public final java.lang.String getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getDeletionForce() {
            return this.deletionForce;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Number getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.Number getEncryptType() {
            return this.encryptType;
        }

        @Override
        public final java.lang.String getFileSystemType() {
            return this.fileSystemType;
        }

        @Override
        public final java.lang.String getSnapshotId() {
            return this.snapshotId;
        }

        @Override
        public final java.lang.String getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.String getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.String getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("protocolType", om.valueToTree(this.getProtocolType()));
            data.set("storageType", om.valueToTree(this.getStorageType()));
            if (this.getBandwidth() != null) {
                data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            }
            if (this.getCapacity() != null) {
                data.set("capacity", om.valueToTree(this.getCapacity()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDuration() != null) {
                data.set("duration", om.valueToTree(this.getDuration()));
            }
            if (this.getEncryptType() != null) {
                data.set("encryptType", om.valueToTree(this.getEncryptType()));
            }
            if (this.getFileSystemType() != null) {
                data.set("fileSystemType", om.valueToTree(this.getFileSystemType()));
            }
            if (this.getSnapshotId() != null) {
                data.set("snapshotId", om.valueToTree(this.getSnapshotId()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.RosFileSystemProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosFileSystemProps.Jsii$Proxy that = (RosFileSystemProps.Jsii$Proxy) o;

            if (!protocolType.equals(that.protocolType)) return false;
            if (!storageType.equals(that.storageType)) return false;
            if (this.bandwidth != null ? !this.bandwidth.equals(that.bandwidth) : that.bandwidth != null) return false;
            if (this.capacity != null ? !this.capacity.equals(that.capacity) : that.capacity != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
            if (this.encryptType != null ? !this.encryptType.equals(that.encryptType) : that.encryptType != null) return false;
            if (this.fileSystemType != null ? !this.fileSystemType.equals(that.fileSystemType) : that.fileSystemType != null) return false;
            if (this.snapshotId != null ? !this.snapshotId.equals(that.snapshotId) : that.snapshotId != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.protocolType.hashCode();
            result = 31 * result + (this.storageType.hashCode());
            result = 31 * result + (this.bandwidth != null ? this.bandwidth.hashCode() : 0);
            result = 31 * result + (this.capacity != null ? this.capacity.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
            result = 31 * result + (this.encryptType != null ? this.encryptType.hashCode() : 0);
            result = 31 * result + (this.fileSystemType != null ? this.fileSystemType.hashCode() : 0);
            result = 31 * result + (this.snapshotId != null ? this.snapshotId.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
