package com.aliyun.ros.cdk.core;

/**
 * A Docker volume.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.188Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.DockerVolume")
@software.amazon.jsii.Jsii.Proxy(DockerVolume.Jsii$Proxy.class)
public interface DockerVolume extends software.amazon.jsii.JsiiSerializable {

    /**
     * The path where the file or directory is mounted in the container.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getContainerPath();

    /**
     * The path to the file or directory on the host machine.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getHostPath();

    /**
     * Mount consistency.
     * <p>
     * Only applicable for macOS
     * <p>
     * Default: DockerConsistency.DELEGATED
     * <p>
     * @see <a href="https://docs.docker.com/storage/bind-mounts/#configure-mount-consistency-for-macos">https://docs.docker.com/storage/bind-mounts/#configure-mount-consistency-for-macos</a>
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.DockerVolumeConsistency getConsistency() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DockerVolume}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DockerVolume}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DockerVolume> {
        java.lang.String containerPath;
        java.lang.String hostPath;
        com.aliyun.ros.cdk.core.DockerVolumeConsistency consistency;

        /**
         * Sets the value of {@link DockerVolume#getContainerPath}
         * @param containerPath The path where the file or directory is mounted in the container. This parameter is required.
         * @return {@code this}
         */
        public Builder containerPath(java.lang.String containerPath) {
            this.containerPath = containerPath;
            return this;
        }

        /**
         * Sets the value of {@link DockerVolume#getHostPath}
         * @param hostPath The path to the file or directory on the host machine. This parameter is required.
         * @return {@code this}
         */
        public Builder hostPath(java.lang.String hostPath) {
            this.hostPath = hostPath;
            return this;
        }

        /**
         * Sets the value of {@link DockerVolume#getConsistency}
         * @param consistency Mount consistency.
         *                    Only applicable for macOS
         * @return {@code this}
         */
        public Builder consistency(com.aliyun.ros.cdk.core.DockerVolumeConsistency consistency) {
            this.consistency = consistency;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DockerVolume}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DockerVolume build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DockerVolume}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DockerVolume {
        private final java.lang.String containerPath;
        private final java.lang.String hostPath;
        private final com.aliyun.ros.cdk.core.DockerVolumeConsistency consistency;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.containerPath = software.amazon.jsii.Kernel.get(this, "containerPath", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.hostPath = software.amazon.jsii.Kernel.get(this, "hostPath", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.consistency = software.amazon.jsii.Kernel.get(this, "consistency", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.DockerVolumeConsistency.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.containerPath = java.util.Objects.requireNonNull(builder.containerPath, "containerPath is required");
            this.hostPath = java.util.Objects.requireNonNull(builder.hostPath, "hostPath is required");
            this.consistency = builder.consistency;
        }

        @Override
        public final java.lang.String getContainerPath() {
            return this.containerPath;
        }

        @Override
        public final java.lang.String getHostPath() {
            return this.hostPath;
        }

        @Override
        public final com.aliyun.ros.cdk.core.DockerVolumeConsistency getConsistency() {
            return this.consistency;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("containerPath", om.valueToTree(this.getContainerPath()));
            data.set("hostPath", om.valueToTree(this.getHostPath()));
            if (this.getConsistency() != null) {
                data.set("consistency", om.valueToTree(this.getConsistency()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.DockerVolume"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DockerVolume.Jsii$Proxy that = (DockerVolume.Jsii$Proxy) o;

            if (!containerPath.equals(that.containerPath)) return false;
            if (!hostPath.equals(that.hostPath)) return false;
            return this.consistency != null ? this.consistency.equals(that.consistency) : that.consistency == null;
        }

        @Override
        public final int hashCode() {
            int result = this.containerPath.hashCode();
            result = 31 * result + (this.hostPath.hashCode());
            result = 31 * result + (this.consistency != null ? this.consistency.hashCode() : 0);
            return result;
        }
    }
}
