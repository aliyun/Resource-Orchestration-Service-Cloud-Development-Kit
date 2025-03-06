package com.aliyun.ros.cdk.pai;

/**
 * Properties for defining a <code>Run</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-run
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.644Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.RunProps")
@software.amazon.jsii.Jsii.Proxy(RunProps.Jsii$Proxy.class)
public interface RunProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property experimentId: Resource attribute field of the experiment ID to which Run belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExperimentId();

    /**
     * Property runName: The name of the Run.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRunName() {
        return null;
    }

    /**
     * Property sourceId: Attribute Resource field representing the source task ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceId() {
        return null;
    }

    /**
     * Property sourceType: Resource attribute fields representing the source type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RunProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RunProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RunProps> {
        java.lang.Object experimentId;
        java.lang.Object runName;
        java.lang.Object sourceId;
        java.lang.Object sourceType;

        /**
         * Sets the value of {@link RunProps#getExperimentId}
         * @param experimentId Property experimentId: Resource attribute field of the experiment ID to which Run belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder experimentId(java.lang.String experimentId) {
            this.experimentId = experimentId;
            return this;
        }

        /**
         * Sets the value of {@link RunProps#getExperimentId}
         * @param experimentId Property experimentId: Resource attribute field of the experiment ID to which Run belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder experimentId(com.aliyun.ros.cdk.core.IResolvable experimentId) {
            this.experimentId = experimentId;
            return this;
        }

        /**
         * Sets the value of {@link RunProps#getRunName}
         * @param runName Property runName: The name of the Run.
         * @return {@code this}
         */
        public Builder runName(java.lang.String runName) {
            this.runName = runName;
            return this;
        }

        /**
         * Sets the value of {@link RunProps#getRunName}
         * @param runName Property runName: The name of the Run.
         * @return {@code this}
         */
        public Builder runName(com.aliyun.ros.cdk.core.IResolvable runName) {
            this.runName = runName;
            return this;
        }

        /**
         * Sets the value of {@link RunProps#getSourceId}
         * @param sourceId Property sourceId: Attribute Resource field representing the source task ID.
         * @return {@code this}
         */
        public Builder sourceId(java.lang.String sourceId) {
            this.sourceId = sourceId;
            return this;
        }

        /**
         * Sets the value of {@link RunProps#getSourceId}
         * @param sourceId Property sourceId: Attribute Resource field representing the source task ID.
         * @return {@code this}
         */
        public Builder sourceId(com.aliyun.ros.cdk.core.IResolvable sourceId) {
            this.sourceId = sourceId;
            return this;
        }

        /**
         * Sets the value of {@link RunProps#getSourceType}
         * @param sourceType Property sourceType: Resource attribute fields representing the source type.
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RunProps#getSourceType}
         * @param sourceType Property sourceType: Resource attribute fields representing the source type.
         * @return {@code this}
         */
        public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RunProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RunProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RunProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RunProps {
        private final java.lang.Object experimentId;
        private final java.lang.Object runName;
        private final java.lang.Object sourceId;
        private final java.lang.Object sourceType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.experimentId = software.amazon.jsii.Kernel.get(this, "experimentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.runName = software.amazon.jsii.Kernel.get(this, "runName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceId = software.amazon.jsii.Kernel.get(this, "sourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.experimentId = java.util.Objects.requireNonNull(builder.experimentId, "experimentId is required");
            this.runName = builder.runName;
            this.sourceId = builder.sourceId;
            this.sourceType = builder.sourceType;
        }

        @Override
        public final java.lang.Object getExperimentId() {
            return this.experimentId;
        }

        @Override
        public final java.lang.Object getRunName() {
            return this.runName;
        }

        @Override
        public final java.lang.Object getSourceId() {
            return this.sourceId;
        }

        @Override
        public final java.lang.Object getSourceType() {
            return this.sourceType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("experimentId", om.valueToTree(this.getExperimentId()));
            if (this.getRunName() != null) {
                data.set("runName", om.valueToTree(this.getRunName()));
            }
            if (this.getSourceId() != null) {
                data.set("sourceId", om.valueToTree(this.getSourceId()));
            }
            if (this.getSourceType() != null) {
                data.set("sourceType", om.valueToTree(this.getSourceType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.RunProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RunProps.Jsii$Proxy that = (RunProps.Jsii$Proxy) o;

            if (!experimentId.equals(that.experimentId)) return false;
            if (this.runName != null ? !this.runName.equals(that.runName) : that.runName != null) return false;
            if (this.sourceId != null ? !this.sourceId.equals(that.sourceId) : that.sourceId != null) return false;
            return this.sourceType != null ? this.sourceType.equals(that.sourceType) : that.sourceType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.experimentId.hashCode();
            result = 31 * result + (this.runName != null ? this.runName.hashCode() : 0);
            result = 31 * result + (this.sourceId != null ? this.sourceId.hashCode() : 0);
            result = 31 * result + (this.sourceType != null ? this.sourceType.hashCode() : 0);
            return result;
        }
    }
}
