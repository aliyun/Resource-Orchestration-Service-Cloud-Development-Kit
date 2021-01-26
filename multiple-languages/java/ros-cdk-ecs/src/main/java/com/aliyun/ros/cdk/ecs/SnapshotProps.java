package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::Snapshot`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T03:36:10.086Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SnapshotProps")
@software.amazon.jsii.Jsii.Proxy(SnapshotProps.Jsii$Proxy.class)
public interface SnapshotProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDiskId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSnapshotName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getTimeout() {
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
        private java.lang.String diskId;
        private java.lang.String description;
        private java.lang.String snapshotName;
        private java.lang.Number timeout;

        /**
         * Sets the value of {@link SnapshotProps#getDiskId}
         * @param diskId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder diskId(java.lang.String diskId) {
            this.diskId = diskId;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getSnapshotName}
         * @param snapshotName the value to be set.
         * @return {@code this}
         */
        public Builder snapshotName(java.lang.String snapshotName) {
            this.snapshotName = snapshotName;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getTimeout}
         * @param timeout the value to be set.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SnapshotProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SnapshotProps build() {
            return new Jsii$Proxy(diskId, description, snapshotName, timeout);
        }
    }

    /**
     * An implementation for {@link SnapshotProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SnapshotProps {
        private final java.lang.String diskId;
        private final java.lang.String description;
        private final java.lang.String snapshotName;
        private final java.lang.Number timeout;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.diskId = software.amazon.jsii.Kernel.get(this, "diskId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.snapshotName = software.amazon.jsii.Kernel.get(this, "snapshotName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String diskId, final java.lang.String description, final java.lang.String snapshotName, final java.lang.Number timeout) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.diskId = java.util.Objects.requireNonNull(diskId, "diskId is required");
            this.description = description;
            this.snapshotName = snapshotName;
            this.timeout = timeout;
        }

        @Override
        public final java.lang.String getDiskId() {
            return this.diskId;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getSnapshotName() {
            return this.snapshotName;
        }

        @Override
        public final java.lang.Number getTimeout() {
            return this.timeout;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("diskId", om.valueToTree(this.getDiskId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getSnapshotName() != null) {
                data.set("snapshotName", om.valueToTree(this.getSnapshotName()));
            }
            if (this.getTimeout() != null) {
                data.set("timeout", om.valueToTree(this.getTimeout()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.SnapshotProps"));
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
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.snapshotName != null ? !this.snapshotName.equals(that.snapshotName) : that.snapshotName != null) return false;
            return this.timeout != null ? this.timeout.equals(that.timeout) : that.timeout == null;
        }

        @Override
        public final int hashCode() {
            int result = this.diskId.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.snapshotName != null ? this.snapshotName.hashCode() : 0);
            result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
            return result;
        }
    }
}
