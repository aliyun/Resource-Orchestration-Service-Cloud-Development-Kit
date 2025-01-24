package com.aliyun.ros.cdk.pai;

/**
 * Properties for defining a <code>RosExperiment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-experiment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:42.017Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.RosExperimentProps")
@software.amazon.jsii.Jsii.Proxy(RosExperimentProps.Jsii$Proxy.class)
public interface RosExperimentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getArtifactUri();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExperimentName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessibility() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosExperimentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosExperimentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosExperimentProps> {
        java.lang.Object artifactUri;
        java.lang.Object experimentName;
        java.lang.Object workspaceId;
        java.lang.Object accessibility;

        /**
         * Sets the value of {@link RosExperimentProps#getArtifactUri}
         * @param artifactUri the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder artifactUri(java.lang.String artifactUri) {
            this.artifactUri = artifactUri;
            return this;
        }

        /**
         * Sets the value of {@link RosExperimentProps#getArtifactUri}
         * @param artifactUri the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder artifactUri(com.aliyun.ros.cdk.core.IResolvable artifactUri) {
            this.artifactUri = artifactUri;
            return this;
        }

        /**
         * Sets the value of {@link RosExperimentProps#getExperimentName}
         * @param experimentName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder experimentName(java.lang.String experimentName) {
            this.experimentName = experimentName;
            return this;
        }

        /**
         * Sets the value of {@link RosExperimentProps#getExperimentName}
         * @param experimentName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder experimentName(com.aliyun.ros.cdk.core.IResolvable experimentName) {
            this.experimentName = experimentName;
            return this;
        }

        /**
         * Sets the value of {@link RosExperimentProps#getWorkspaceId}
         * @param workspaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(java.lang.String workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosExperimentProps#getWorkspaceId}
         * @param workspaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosExperimentProps#getAccessibility}
         * @param accessibility the value to be set.
         * @return {@code this}
         */
        public Builder accessibility(java.lang.String accessibility) {
            this.accessibility = accessibility;
            return this;
        }

        /**
         * Sets the value of {@link RosExperimentProps#getAccessibility}
         * @param accessibility the value to be set.
         * @return {@code this}
         */
        public Builder accessibility(com.aliyun.ros.cdk.core.IResolvable accessibility) {
            this.accessibility = accessibility;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosExperimentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosExperimentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosExperimentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosExperimentProps {
        private final java.lang.Object artifactUri;
        private final java.lang.Object experimentName;
        private final java.lang.Object workspaceId;
        private final java.lang.Object accessibility;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.artifactUri = software.amazon.jsii.Kernel.get(this, "artifactUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.experimentName = software.amazon.jsii.Kernel.get(this, "experimentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceId = software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessibility = software.amazon.jsii.Kernel.get(this, "accessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.artifactUri = java.util.Objects.requireNonNull(builder.artifactUri, "artifactUri is required");
            this.experimentName = java.util.Objects.requireNonNull(builder.experimentName, "experimentName is required");
            this.workspaceId = java.util.Objects.requireNonNull(builder.workspaceId, "workspaceId is required");
            this.accessibility = builder.accessibility;
        }

        @Override
        public final java.lang.Object getArtifactUri() {
            return this.artifactUri;
        }

        @Override
        public final java.lang.Object getExperimentName() {
            return this.experimentName;
        }

        @Override
        public final java.lang.Object getWorkspaceId() {
            return this.workspaceId;
        }

        @Override
        public final java.lang.Object getAccessibility() {
            return this.accessibility;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("artifactUri", om.valueToTree(this.getArtifactUri()));
            data.set("experimentName", om.valueToTree(this.getExperimentName()));
            data.set("workspaceId", om.valueToTree(this.getWorkspaceId()));
            if (this.getAccessibility() != null) {
                data.set("accessibility", om.valueToTree(this.getAccessibility()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.RosExperimentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosExperimentProps.Jsii$Proxy that = (RosExperimentProps.Jsii$Proxy) o;

            if (!artifactUri.equals(that.artifactUri)) return false;
            if (!experimentName.equals(that.experimentName)) return false;
            if (!workspaceId.equals(that.workspaceId)) return false;
            return this.accessibility != null ? this.accessibility.equals(that.accessibility) : that.accessibility == null;
        }

        @Override
        public final int hashCode() {
            int result = this.artifactUri.hashCode();
            result = 31 * result + (this.experimentName.hashCode());
            result = 31 * result + (this.workspaceId.hashCode());
            result = 31 * result + (this.accessibility != null ? this.accessibility.hashCode() : 0);
            return result;
        }
    }
}
