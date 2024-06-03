package com.aliyun.ros.cdk.assembly.schema;

/**
 * Where to publish docker images.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:49.190Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.DockerImageDestination")
@software.amazon.jsii.Jsii.Proxy(DockerImageDestination.Jsii$Proxy.class)
public interface DockerImageDestination extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.assembly.schema.AliCloudDestination {

    /**
     * Tag of the image to publish.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getImageTag();

    /**
     * Name of the ECR repository to publish to.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRepositoryName();

    /**
     * @return a {@link Builder} of {@link DockerImageDestination}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DockerImageDestination}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DockerImageDestination> {
        java.lang.String imageTag;
        java.lang.String repositoryName;
        java.lang.String region;

        /**
         * Sets the value of {@link DockerImageDestination#getImageTag}
         * @param imageTag Tag of the image to publish. This parameter is required.
         * @return {@code this}
         */
        public Builder imageTag(java.lang.String imageTag) {
            this.imageTag = imageTag;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageDestination#getRepositoryName}
         * @param repositoryName Name of the ECR repository to publish to. This parameter is required.
         * @return {@code this}
         */
        public Builder repositoryName(java.lang.String repositoryName) {
            this.repositoryName = repositoryName;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageDestination#getRegion}
         * @param region The region where this asset will need to be published.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DockerImageDestination}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DockerImageDestination build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DockerImageDestination}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DockerImageDestination {
        private final java.lang.String imageTag;
        private final java.lang.String repositoryName;
        private final java.lang.String region;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.imageTag = software.amazon.jsii.Kernel.get(this, "imageTag", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.repositoryName = software.amazon.jsii.Kernel.get(this, "repositoryName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.imageTag = java.util.Objects.requireNonNull(builder.imageTag, "imageTag is required");
            this.repositoryName = java.util.Objects.requireNonNull(builder.repositoryName, "repositoryName is required");
            this.region = builder.region;
        }

        @Override
        public final java.lang.String getImageTag() {
            return this.imageTag;
        }

        @Override
        public final java.lang.String getRepositoryName() {
            return this.repositoryName;
        }

        @Override
        public final java.lang.String getRegion() {
            return this.region;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("imageTag", om.valueToTree(this.getImageTag()));
            data.set("repositoryName", om.valueToTree(this.getRepositoryName()));
            if (this.getRegion() != null) {
                data.set("region", om.valueToTree(this.getRegion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.DockerImageDestination"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DockerImageDestination.Jsii$Proxy that = (DockerImageDestination.Jsii$Proxy) o;

            if (!imageTag.equals(that.imageTag)) return false;
            if (!repositoryName.equals(that.repositoryName)) return false;
            return this.region != null ? this.region.equals(that.region) : that.region == null;
        }

        @Override
        public final int hashCode() {
            int result = this.imageTag.hashCode();
            result = 31 * result + (this.repositoryName.hashCode());
            result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
            return result;
        }
    }
}
