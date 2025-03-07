package com.aliyun.ros.cdk.cr;

/**
 * Properties for defining a <code>Repository</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.291Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.RepositoryProps")
@software.amazon.jsii.Jsii.Proxy(RepositoryProps.Jsii$Proxy.class)
public interface RepositoryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property repoName: The name of the repository.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRepoName();

    /**
     * Property repoNamespace: The name of the namespace to which the repository belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRepoNamespace();

    /**
     * Property repoType: The type of the repository.
     * <p>
     * Valid values: PUBLIC, PRIVATE.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRepoType();

    /**
     * Property summary: The summary of the repository.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSummary();

    /**
     * Property detail: The description of the repository.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDetail() {
        return null;
    }

    /**
     * Property instanceId: The ID of the enterprise edition instance which repository belongs to.
     * <p>
     * If not provided, will use personal edition instance as default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     * Property repoSource: Code Source message.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRepoSource() {
        return null;
    }

    /**
     * Property tagImmutability: Specifies whether the repository is immutable.
     * <p>
     * Only takes effect when InstanceId is specified.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTagImmutability() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RepositoryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RepositoryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RepositoryProps> {
        java.lang.Object repoName;
        java.lang.Object repoNamespace;
        java.lang.Object repoType;
        java.lang.Object summary;
        java.lang.Object detail;
        java.lang.Object instanceId;
        java.lang.Object repoSource;
        java.lang.Object tagImmutability;

        /**
         * Sets the value of {@link RepositoryProps#getRepoName}
         * @param repoName Property repoName: The name of the repository. This parameter is required.
         * @return {@code this}
         */
        public Builder repoName(java.lang.String repoName) {
            this.repoName = repoName;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getRepoName}
         * @param repoName Property repoName: The name of the repository. This parameter is required.
         * @return {@code this}
         */
        public Builder repoName(com.aliyun.ros.cdk.core.IResolvable repoName) {
            this.repoName = repoName;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getRepoNamespace}
         * @param repoNamespace Property repoNamespace: The name of the namespace to which the repository belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder repoNamespace(java.lang.String repoNamespace) {
            this.repoNamespace = repoNamespace;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getRepoNamespace}
         * @param repoNamespace Property repoNamespace: The name of the namespace to which the repository belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder repoNamespace(com.aliyun.ros.cdk.core.IResolvable repoNamespace) {
            this.repoNamespace = repoNamespace;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getRepoType}
         * @param repoType Property repoType: The type of the repository. This parameter is required.
         *                 Valid values: PUBLIC, PRIVATE.
         * @return {@code this}
         */
        public Builder repoType(java.lang.String repoType) {
            this.repoType = repoType;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getRepoType}
         * @param repoType Property repoType: The type of the repository. This parameter is required.
         *                 Valid values: PUBLIC, PRIVATE.
         * @return {@code this}
         */
        public Builder repoType(com.aliyun.ros.cdk.core.IResolvable repoType) {
            this.repoType = repoType;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getSummary}
         * @param summary Property summary: The summary of the repository. This parameter is required.
         * @return {@code this}
         */
        public Builder summary(java.lang.String summary) {
            this.summary = summary;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getSummary}
         * @param summary Property summary: The summary of the repository. This parameter is required.
         * @return {@code this}
         */
        public Builder summary(com.aliyun.ros.cdk.core.IResolvable summary) {
            this.summary = summary;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getDetail}
         * @param detail Property detail: The description of the repository.
         * @return {@code this}
         */
        public Builder detail(java.lang.String detail) {
            this.detail = detail;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getDetail}
         * @param detail Property detail: The description of the repository.
         * @return {@code this}
         */
        public Builder detail(com.aliyun.ros.cdk.core.IResolvable detail) {
            this.detail = detail;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the enterprise edition instance which repository belongs to.
         *                   If not provided, will use personal edition instance as default.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the enterprise edition instance which repository belongs to.
         *                   If not provided, will use personal edition instance as default.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getRepoSource}
         * @param repoSource Property repoSource: Code Source message.
         * @return {@code this}
         */
        public Builder repoSource(com.aliyun.ros.cdk.core.IResolvable repoSource) {
            this.repoSource = repoSource;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getRepoSource}
         * @param repoSource Property repoSource: Code Source message.
         * @return {@code this}
         */
        public Builder repoSource(com.aliyun.ros.cdk.cr.RosRepository.RepoSourceProperty repoSource) {
            this.repoSource = repoSource;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getTagImmutability}
         * @param tagImmutability Property tagImmutability: Specifies whether the repository is immutable.
         *                        Only takes effect when InstanceId is specified.
         * @return {@code this}
         */
        public Builder tagImmutability(java.lang.Boolean tagImmutability) {
            this.tagImmutability = tagImmutability;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getTagImmutability}
         * @param tagImmutability Property tagImmutability: Specifies whether the repository is immutable.
         *                        Only takes effect when InstanceId is specified.
         * @return {@code this}
         */
        public Builder tagImmutability(com.aliyun.ros.cdk.core.IResolvable tagImmutability) {
            this.tagImmutability = tagImmutability;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RepositoryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RepositoryProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RepositoryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RepositoryProps {
        private final java.lang.Object repoName;
        private final java.lang.Object repoNamespace;
        private final java.lang.Object repoType;
        private final java.lang.Object summary;
        private final java.lang.Object detail;
        private final java.lang.Object instanceId;
        private final java.lang.Object repoSource;
        private final java.lang.Object tagImmutability;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.repoName = software.amazon.jsii.Kernel.get(this, "repoName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repoNamespace = software.amazon.jsii.Kernel.get(this, "repoNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repoType = software.amazon.jsii.Kernel.get(this, "repoType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.summary = software.amazon.jsii.Kernel.get(this, "summary", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.detail = software.amazon.jsii.Kernel.get(this, "detail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repoSource = software.amazon.jsii.Kernel.get(this, "repoSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tagImmutability = software.amazon.jsii.Kernel.get(this, "tagImmutability", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.repoName = java.util.Objects.requireNonNull(builder.repoName, "repoName is required");
            this.repoNamespace = java.util.Objects.requireNonNull(builder.repoNamespace, "repoNamespace is required");
            this.repoType = java.util.Objects.requireNonNull(builder.repoType, "repoType is required");
            this.summary = java.util.Objects.requireNonNull(builder.summary, "summary is required");
            this.detail = builder.detail;
            this.instanceId = builder.instanceId;
            this.repoSource = builder.repoSource;
            this.tagImmutability = builder.tagImmutability;
        }

        @Override
        public final java.lang.Object getRepoName() {
            return this.repoName;
        }

        @Override
        public final java.lang.Object getRepoNamespace() {
            return this.repoNamespace;
        }

        @Override
        public final java.lang.Object getRepoType() {
            return this.repoType;
        }

        @Override
        public final java.lang.Object getSummary() {
            return this.summary;
        }

        @Override
        public final java.lang.Object getDetail() {
            return this.detail;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getRepoSource() {
            return this.repoSource;
        }

        @Override
        public final java.lang.Object getTagImmutability() {
            return this.tagImmutability;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("repoName", om.valueToTree(this.getRepoName()));
            data.set("repoNamespace", om.valueToTree(this.getRepoNamespace()));
            data.set("repoType", om.valueToTree(this.getRepoType()));
            data.set("summary", om.valueToTree(this.getSummary()));
            if (this.getDetail() != null) {
                data.set("detail", om.valueToTree(this.getDetail()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getRepoSource() != null) {
                data.set("repoSource", om.valueToTree(this.getRepoSource()));
            }
            if (this.getTagImmutability() != null) {
                data.set("tagImmutability", om.valueToTree(this.getTagImmutability()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cr.RepositoryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RepositoryProps.Jsii$Proxy that = (RepositoryProps.Jsii$Proxy) o;

            if (!repoName.equals(that.repoName)) return false;
            if (!repoNamespace.equals(that.repoNamespace)) return false;
            if (!repoType.equals(that.repoType)) return false;
            if (!summary.equals(that.summary)) return false;
            if (this.detail != null ? !this.detail.equals(that.detail) : that.detail != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.repoSource != null ? !this.repoSource.equals(that.repoSource) : that.repoSource != null) return false;
            return this.tagImmutability != null ? this.tagImmutability.equals(that.tagImmutability) : that.tagImmutability == null;
        }

        @Override
        public final int hashCode() {
            int result = this.repoName.hashCode();
            result = 31 * result + (this.repoNamespace.hashCode());
            result = 31 * result + (this.repoType.hashCode());
            result = 31 * result + (this.summary.hashCode());
            result = 31 * result + (this.detail != null ? this.detail.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.repoSource != null ? this.repoSource.hashCode() : 0);
            result = 31 * result + (this.tagImmutability != null ? this.tagImmutability.hashCode() : 0);
            return result;
        }
    }
}
