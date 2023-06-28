package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a <code>ALIYUN::SLS::Index</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:30.566Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.IndexProps")
@software.amazon.jsii.Jsii.Proxy(IndexProps.Jsii$Proxy.class)
public interface IndexProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property fullTextIndex: Full-text indexing configuration.
     * <p>
     * Full-text indexing and key indexing must have at least one enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFullTextIndex();

    /**
     * Property logstoreName: Logstore name: 1.
     * <p>
     * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogstoreName();

    /**
     * Property projectName: Project name: 1.
     * <p>
     * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

    /**
     * Property keyIndices: Key index configurations.
     * <p>
     * Full-text indexing and key indexing must have at least one enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyIndices() {
        return null;
    }

    /**
     * Property logReduce: Whether to enable log reduce.
     * <p>
     * Default to false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogReduce() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link IndexProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link IndexProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<IndexProps> {
        java.lang.Object fullTextIndex;
        java.lang.Object logstoreName;
        java.lang.Object projectName;
        java.lang.Object keyIndices;
        java.lang.Object logReduce;

        /**
         * Sets the value of {@link IndexProps#getFullTextIndex}
         * @param fullTextIndex Property fullTextIndex: Full-text indexing configuration. This parameter is required.
         *                      Full-text indexing and key indexing must have at least one enabled.
         * @return {@code this}
         */
        public Builder fullTextIndex(com.aliyun.ros.cdk.core.IResolvable fullTextIndex) {
            this.fullTextIndex = fullTextIndex;
            return this;
        }

        /**
         * Sets the value of {@link IndexProps#getFullTextIndex}
         * @param fullTextIndex Property fullTextIndex: Full-text indexing configuration. This parameter is required.
         *                      Full-text indexing and key indexing must have at least one enabled.
         * @return {@code this}
         */
        public Builder fullTextIndex(com.aliyun.ros.cdk.sls.RosIndex.FullTextIndexProperty fullTextIndex) {
            this.fullTextIndex = fullTextIndex;
            return this;
        }

        /**
         * Sets the value of {@link IndexProps#getLogstoreName}
         * @param logstoreName Property logstoreName: Logstore name: 1. This parameter is required.
         *                     Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         *                     2. Must start and end with lowercase letters and numbers.
         *                     3. The name length is 3-63 characters.
         * @return {@code this}
         */
        public Builder logstoreName(java.lang.String logstoreName) {
            this.logstoreName = logstoreName;
            return this;
        }

        /**
         * Sets the value of {@link IndexProps#getLogstoreName}
         * @param logstoreName Property logstoreName: Logstore name: 1. This parameter is required.
         *                     Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         *                     2. Must start and end with lowercase letters and numbers.
         *                     3. The name length is 3-63 characters.
         * @return {@code this}
         */
        public Builder logstoreName(com.aliyun.ros.cdk.core.IResolvable logstoreName) {
            this.logstoreName = logstoreName;
            return this;
        }

        /**
         * Sets the value of {@link IndexProps#getProjectName}
         * @param projectName Property projectName: Project name: 1. This parameter is required.
         *                    Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         *                    2. Must start and end with lowercase letters and numbers.
         *                    3. The name length is 3-63 characters.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link IndexProps#getProjectName}
         * @param projectName Property projectName: Project name: 1. This parameter is required.
         *                    Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         *                    2. Must start and end with lowercase letters and numbers.
         *                    3. The name length is 3-63 characters.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link IndexProps#getKeyIndices}
         * @param keyIndices Property keyIndices: Key index configurations.
         *                   Full-text indexing and key indexing must have at least one enabled.
         * @return {@code this}
         */
        public Builder keyIndices(com.aliyun.ros.cdk.core.IResolvable keyIndices) {
            this.keyIndices = keyIndices;
            return this;
        }

        /**
         * Sets the value of {@link IndexProps#getKeyIndices}
         * @param keyIndices Property keyIndices: Key index configurations.
         *                   Full-text indexing and key indexing must have at least one enabled.
         * @return {@code this}
         */
        public Builder keyIndices(java.util.List<? extends java.lang.Object> keyIndices) {
            this.keyIndices = keyIndices;
            return this;
        }

        /**
         * Sets the value of {@link IndexProps#getLogReduce}
         * @param logReduce Property logReduce: Whether to enable log reduce.
         *                  Default to false.
         * @return {@code this}
         */
        public Builder logReduce(java.lang.Boolean logReduce) {
            this.logReduce = logReduce;
            return this;
        }

        /**
         * Sets the value of {@link IndexProps#getLogReduce}
         * @param logReduce Property logReduce: Whether to enable log reduce.
         *                  Default to false.
         * @return {@code this}
         */
        public Builder logReduce(com.aliyun.ros.cdk.core.IResolvable logReduce) {
            this.logReduce = logReduce;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link IndexProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public IndexProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link IndexProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IndexProps {
        private final java.lang.Object fullTextIndex;
        private final java.lang.Object logstoreName;
        private final java.lang.Object projectName;
        private final java.lang.Object keyIndices;
        private final java.lang.Object logReduce;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.fullTextIndex = software.amazon.jsii.Kernel.get(this, "fullTextIndex", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logstoreName = software.amazon.jsii.Kernel.get(this, "logstoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyIndices = software.amazon.jsii.Kernel.get(this, "keyIndices", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logReduce = software.amazon.jsii.Kernel.get(this, "logReduce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.fullTextIndex = java.util.Objects.requireNonNull(builder.fullTextIndex, "fullTextIndex is required");
            this.logstoreName = java.util.Objects.requireNonNull(builder.logstoreName, "logstoreName is required");
            this.projectName = java.util.Objects.requireNonNull(builder.projectName, "projectName is required");
            this.keyIndices = builder.keyIndices;
            this.logReduce = builder.logReduce;
        }

        @Override
        public final java.lang.Object getFullTextIndex() {
            return this.fullTextIndex;
        }

        @Override
        public final java.lang.Object getLogstoreName() {
            return this.logstoreName;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.Object getKeyIndices() {
            return this.keyIndices;
        }

        @Override
        public final java.lang.Object getLogReduce() {
            return this.logReduce;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("fullTextIndex", om.valueToTree(this.getFullTextIndex()));
            data.set("logstoreName", om.valueToTree(this.getLogstoreName()));
            data.set("projectName", om.valueToTree(this.getProjectName()));
            if (this.getKeyIndices() != null) {
                data.set("keyIndices", om.valueToTree(this.getKeyIndices()));
            }
            if (this.getLogReduce() != null) {
                data.set("logReduce", om.valueToTree(this.getLogReduce()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.IndexProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            IndexProps.Jsii$Proxy that = (IndexProps.Jsii$Proxy) o;

            if (!fullTextIndex.equals(that.fullTextIndex)) return false;
            if (!logstoreName.equals(that.logstoreName)) return false;
            if (!projectName.equals(that.projectName)) return false;
            if (this.keyIndices != null ? !this.keyIndices.equals(that.keyIndices) : that.keyIndices != null) return false;
            return this.logReduce != null ? this.logReduce.equals(that.logReduce) : that.logReduce == null;
        }

        @Override
        public final int hashCode() {
            int result = this.fullTextIndex.hashCode();
            result = 31 * result + (this.logstoreName.hashCode());
            result = 31 * result + (this.projectName.hashCode());
            result = 31 * result + (this.keyIndices != null ? this.keyIndices.hashCode() : 0);
            result = 31 * result + (this.logReduce != null ? this.logReduce.hashCode() : 0);
            return result;
        }
    }
}
