package com.aliyun.ros.cdk.ens;

/**
 * Properties for defining a <code>Snapshot</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-snapshot
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:39.662Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.SnapshotProps")
@software.amazon.jsii.Jsii.Proxy(SnapshotProps.Jsii$Proxy.class)
public interface SnapshotProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property diskId: The ID of the cloud disk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDiskId();

    /**
     * Property ensRegionId: The ID of the edge node.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnsRegionId();

    /**
     * Property description: The description of the snapshot.
     * <p>
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     * By default, this parameter is left empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property snapshotName: The name of the snapshot.
     * <p>
     * The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SnapshotProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SnapshotProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SnapshotProps> {
        java.lang.Object diskId;
        java.lang.Object ensRegionId;
        java.lang.Object description;
        java.lang.Object snapshotName;

        /**
         * Sets the value of {@link SnapshotProps#getDiskId}
         * @param diskId Property diskId: The ID of the cloud disk. This parameter is required.
         * @return {@code this}
         */
        public Builder diskId(java.lang.String diskId) {
            this.diskId = diskId;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getDiskId}
         * @param diskId Property diskId: The ID of the cloud disk. This parameter is required.
         * @return {@code this}
         */
        public Builder diskId(com.aliyun.ros.cdk.core.IResolvable diskId) {
            this.diskId = diskId;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getEnsRegionId}
         * @param ensRegionId Property ensRegionId: The ID of the edge node. This parameter is required.
         * @return {@code this}
         */
        public Builder ensRegionId(java.lang.String ensRegionId) {
            this.ensRegionId = ensRegionId;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getEnsRegionId}
         * @param ensRegionId Property ensRegionId: The ID of the edge node. This parameter is required.
         * @return {@code this}
         */
        public Builder ensRegionId(com.aliyun.ros.cdk.core.IResolvable ensRegionId) {
            this.ensRegionId = ensRegionId;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getDescription}
         * @param description Property description: The description of the snapshot.
         *                    The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         *                    By default, this parameter is left empty.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getDescription}
         * @param description Property description: The description of the snapshot.
         *                    The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         *                    By default, this parameter is left empty.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getSnapshotName}
         * @param snapshotName Property snapshotName: The name of the snapshot.
         *                     The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder snapshotName(java.lang.String snapshotName) {
            this.snapshotName = snapshotName;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getSnapshotName}
         * @param snapshotName Property snapshotName: The name of the snapshot.
         *                     The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder snapshotName(com.aliyun.ros.cdk.core.IResolvable snapshotName) {
            this.snapshotName = snapshotName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SnapshotProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SnapshotProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SnapshotProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SnapshotProps {
        private final java.lang.Object diskId;
        private final java.lang.Object ensRegionId;
        private final java.lang.Object description;
        private final java.lang.Object snapshotName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.diskId = software.amazon.jsii.Kernel.get(this, "diskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ensRegionId = software.amazon.jsii.Kernel.get(this, "ensRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snapshotName = software.amazon.jsii.Kernel.get(this, "snapshotName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.diskId = java.util.Objects.requireNonNull(builder.diskId, "diskId is required");
            this.ensRegionId = java.util.Objects.requireNonNull(builder.ensRegionId, "ensRegionId is required");
            this.description = builder.description;
            this.snapshotName = builder.snapshotName;
        }

        @Override
        public final java.lang.Object getDiskId() {
            return this.diskId;
        }

        @Override
        public final java.lang.Object getEnsRegionId() {
            return this.ensRegionId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getSnapshotName() {
            return this.snapshotName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("diskId", om.valueToTree(this.getDiskId()));
            data.set("ensRegionId", om.valueToTree(this.getEnsRegionId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getSnapshotName() != null) {
                data.set("snapshotName", om.valueToTree(this.getSnapshotName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ens.SnapshotProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SnapshotProps.Jsii$Proxy that = (SnapshotProps.Jsii$Proxy) o;

            if (!diskId.equals(that.diskId)) return false;
            if (!ensRegionId.equals(that.ensRegionId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.snapshotName != null ? this.snapshotName.equals(that.snapshotName) : that.snapshotName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.diskId.hashCode();
            result = 31 * result + (this.ensRegionId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.snapshotName != null ? this.snapshotName.hashCode() : 0);
            return result;
        }
    }
}
