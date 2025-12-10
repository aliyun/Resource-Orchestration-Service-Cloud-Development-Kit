package com.aliyun.ros.cdk.paiplugin;

/**
 * Properties for defining a <code>Group</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-group
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.941Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paiplugin.$Module.class, fqn = "@alicloud/ros-cdk-paiplugin.GroupProps")
@software.amazon.jsii.Jsii.Proxy(GroupProps.Jsii$Proxy.class)
public interface GroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property name: The name of the user group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property source: Crowd source.
     * <p>
     * Valid values:
     * 0: Enter phone numbers.
     * 1: Single-column CSV File (Phone Numbers).
     * 2: Multi-column CSV File.
     * 3: MaxCompute Table.
     * 4: Algorithm.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSource();

    /**
     * Property algorithm: Association algorithm.
     * <p>
     * This must be specified when Source is 4(Algorithm).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlgorithm() {
        return null;
    }

    /**
     * Property column: Mobile phone number column name.
     * <p>
     * The Source is 2(Multi-column CSV File) or 3(MaxCompute Table) needs to be specified when it contains mobile phone numbers.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getColumn() {
        return null;
    }

    /**
     * Property filter: Filter condition.
     * <p>
     * This condition can be specified when Source is 3(MaxCompute Table).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFilter() {
        return null;
    }

    /**
     * Property inferenceJobId: Prediction task ID.This condition can be specified when Source is 4(Algorithm).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInferenceJobId() {
        return null;
    }

    /**
     * Property phoneNumber: Whether to include mobile phone numbers.
     * <p>
     * People with mobile phone numbers can be used for reach plans.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPhoneNumber() {
        return null;
    }

    /**
     * Property project: MaxCompute (ODPS) project name.
     * <p>
     * This parameter must be specified when Source is 3(MaxCompute Table).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProject() {
        return null;
    }

    /**
     * Property remark: The notes of the user group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     * Property table: MaxCompute (ODPS) table name.
     * <p>
     * This parameter must be specified when Source is 3(MaxCompute Table).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTable() {
        return null;
    }

    /**
     * Property text: The text of the phone number.
     * <p>
     * This must be specified when Source is 0(Enter phone numbers).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getText() {
        return null;
    }

    /**
     * Property uri: File address.
     * <p>
     * It needs to be specified when Source is 1(Single-column CSV File) or 2(Multi-column CSV File).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUri() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link GroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link GroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<GroupProps> {
        java.lang.Object name;
        java.lang.Object source;
        java.lang.Object algorithm;
        java.lang.Object column;
        java.lang.Object filter;
        java.lang.Object inferenceJobId;
        java.lang.Object phoneNumber;
        java.lang.Object project;
        java.lang.Object remark;
        java.lang.Object table;
        java.lang.Object text;
        java.lang.Object uri;

        /**
         * Sets the value of {@link GroupProps#getName}
         * @param name Property name: The name of the user group. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getName}
         * @param name Property name: The name of the user group. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getSource}
         * @param source Property source: Crowd source. This parameter is required.
         *               Valid values:
         *               0: Enter phone numbers.
         *               1: Single-column CSV File (Phone Numbers).
         *               2: Multi-column CSV File.
         *               3: MaxCompute Table.
         *               4: Algorithm.
         * @return {@code this}
         */
        public Builder source(java.lang.Number source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getSource}
         * @param source Property source: Crowd source. This parameter is required.
         *               Valid values:
         *               0: Enter phone numbers.
         *               1: Single-column CSV File (Phone Numbers).
         *               2: Multi-column CSV File.
         *               3: MaxCompute Table.
         *               4: Algorithm.
         * @return {@code this}
         */
        public Builder source(com.aliyun.ros.cdk.core.IResolvable source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getAlgorithm}
         * @param algorithm Property algorithm: Association algorithm.
         *                  This must be specified when Source is 4(Algorithm).
         * @return {@code this}
         */
        public Builder algorithm(java.lang.String algorithm) {
            this.algorithm = algorithm;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getAlgorithm}
         * @param algorithm Property algorithm: Association algorithm.
         *                  This must be specified when Source is 4(Algorithm).
         * @return {@code this}
         */
        public Builder algorithm(com.aliyun.ros.cdk.core.IResolvable algorithm) {
            this.algorithm = algorithm;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getColumn}
         * @param column Property column: Mobile phone number column name.
         *               The Source is 2(Multi-column CSV File) or 3(MaxCompute Table) needs to be specified when it contains mobile phone numbers.
         * @return {@code this}
         */
        public Builder column(java.lang.String column) {
            this.column = column;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getColumn}
         * @param column Property column: Mobile phone number column name.
         *               The Source is 2(Multi-column CSV File) or 3(MaxCompute Table) needs to be specified when it contains mobile phone numbers.
         * @return {@code this}
         */
        public Builder column(com.aliyun.ros.cdk.core.IResolvable column) {
            this.column = column;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getFilter}
         * @param filter Property filter: Filter condition.
         *               This condition can be specified when Source is 3(MaxCompute Table).
         * @return {@code this}
         */
        public Builder filter(java.lang.String filter) {
            this.filter = filter;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getFilter}
         * @param filter Property filter: Filter condition.
         *               This condition can be specified when Source is 3(MaxCompute Table).
         * @return {@code this}
         */
        public Builder filter(com.aliyun.ros.cdk.core.IResolvable filter) {
            this.filter = filter;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getInferenceJobId}
         * @param inferenceJobId Property inferenceJobId: Prediction task ID.This condition can be specified when Source is 4(Algorithm).
         * @return {@code this}
         */
        public Builder inferenceJobId(java.lang.String inferenceJobId) {
            this.inferenceJobId = inferenceJobId;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getInferenceJobId}
         * @param inferenceJobId Property inferenceJobId: Prediction task ID.This condition can be specified when Source is 4(Algorithm).
         * @return {@code this}
         */
        public Builder inferenceJobId(com.aliyun.ros.cdk.core.IResolvable inferenceJobId) {
            this.inferenceJobId = inferenceJobId;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getPhoneNumber}
         * @param phoneNumber Property phoneNumber: Whether to include mobile phone numbers.
         *                    People with mobile phone numbers can be used for reach plans.
         * @return {@code this}
         */
        public Builder phoneNumber(java.lang.String phoneNumber) {
            this.phoneNumber = phoneNumber;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getPhoneNumber}
         * @param phoneNumber Property phoneNumber: Whether to include mobile phone numbers.
         *                    People with mobile phone numbers can be used for reach plans.
         * @return {@code this}
         */
        public Builder phoneNumber(com.aliyun.ros.cdk.core.IResolvable phoneNumber) {
            this.phoneNumber = phoneNumber;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getProject}
         * @param project Property project: MaxCompute (ODPS) project name.
         *                This parameter must be specified when Source is 3(MaxCompute Table).
         * @return {@code this}
         */
        public Builder project(java.lang.String project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getProject}
         * @param project Property project: MaxCompute (ODPS) project name.
         *                This parameter must be specified when Source is 3(MaxCompute Table).
         * @return {@code this}
         */
        public Builder project(com.aliyun.ros.cdk.core.IResolvable project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getRemark}
         * @param remark Property remark: The notes of the user group.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getRemark}
         * @param remark Property remark: The notes of the user group.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getTable}
         * @param table Property table: MaxCompute (ODPS) table name.
         *              This parameter must be specified when Source is 3(MaxCompute Table).
         * @return {@code this}
         */
        public Builder table(java.lang.String table) {
            this.table = table;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getTable}
         * @param table Property table: MaxCompute (ODPS) table name.
         *              This parameter must be specified when Source is 3(MaxCompute Table).
         * @return {@code this}
         */
        public Builder table(com.aliyun.ros.cdk.core.IResolvable table) {
            this.table = table;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getText}
         * @param text Property text: The text of the phone number.
         *             This must be specified when Source is 0(Enter phone numbers).
         * @return {@code this}
         */
        public Builder text(java.lang.String text) {
            this.text = text;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getText}
         * @param text Property text: The text of the phone number.
         *             This must be specified when Source is 0(Enter phone numbers).
         * @return {@code this}
         */
        public Builder text(com.aliyun.ros.cdk.core.IResolvable text) {
            this.text = text;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getUri}
         * @param uri Property uri: File address.
         *            It needs to be specified when Source is 1(Single-column CSV File) or 2(Multi-column CSV File).
         * @return {@code this}
         */
        public Builder uri(java.lang.String uri) {
            this.uri = uri;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getUri}
         * @param uri Property uri: File address.
         *            It needs to be specified when Source is 1(Single-column CSV File) or 2(Multi-column CSV File).
         * @return {@code this}
         */
        public Builder uri(com.aliyun.ros.cdk.core.IResolvable uri) {
            this.uri = uri;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link GroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public GroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link GroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GroupProps {
        private final java.lang.Object name;
        private final java.lang.Object source;
        private final java.lang.Object algorithm;
        private final java.lang.Object column;
        private final java.lang.Object filter;
        private final java.lang.Object inferenceJobId;
        private final java.lang.Object phoneNumber;
        private final java.lang.Object project;
        private final java.lang.Object remark;
        private final java.lang.Object table;
        private final java.lang.Object text;
        private final java.lang.Object uri;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.source = software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.algorithm = software.amazon.jsii.Kernel.get(this, "algorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.column = software.amazon.jsii.Kernel.get(this, "column", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.filter = software.amazon.jsii.Kernel.get(this, "filter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.inferenceJobId = software.amazon.jsii.Kernel.get(this, "inferenceJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.phoneNumber = software.amazon.jsii.Kernel.get(this, "phoneNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.project = software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.table = software.amazon.jsii.Kernel.get(this, "table", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.text = software.amazon.jsii.Kernel.get(this, "text", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uri = software.amazon.jsii.Kernel.get(this, "uri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.source = java.util.Objects.requireNonNull(builder.source, "source is required");
            this.algorithm = builder.algorithm;
            this.column = builder.column;
            this.filter = builder.filter;
            this.inferenceJobId = builder.inferenceJobId;
            this.phoneNumber = builder.phoneNumber;
            this.project = builder.project;
            this.remark = builder.remark;
            this.table = builder.table;
            this.text = builder.text;
            this.uri = builder.uri;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getSource() {
            return this.source;
        }

        @Override
        public final java.lang.Object getAlgorithm() {
            return this.algorithm;
        }

        @Override
        public final java.lang.Object getColumn() {
            return this.column;
        }

        @Override
        public final java.lang.Object getFilter() {
            return this.filter;
        }

        @Override
        public final java.lang.Object getInferenceJobId() {
            return this.inferenceJobId;
        }

        @Override
        public final java.lang.Object getPhoneNumber() {
            return this.phoneNumber;
        }

        @Override
        public final java.lang.Object getProject() {
            return this.project;
        }

        @Override
        public final java.lang.Object getRemark() {
            return this.remark;
        }

        @Override
        public final java.lang.Object getTable() {
            return this.table;
        }

        @Override
        public final java.lang.Object getText() {
            return this.text;
        }

        @Override
        public final java.lang.Object getUri() {
            return this.uri;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            data.set("source", om.valueToTree(this.getSource()));
            if (this.getAlgorithm() != null) {
                data.set("algorithm", om.valueToTree(this.getAlgorithm()));
            }
            if (this.getColumn() != null) {
                data.set("column", om.valueToTree(this.getColumn()));
            }
            if (this.getFilter() != null) {
                data.set("filter", om.valueToTree(this.getFilter()));
            }
            if (this.getInferenceJobId() != null) {
                data.set("inferenceJobId", om.valueToTree(this.getInferenceJobId()));
            }
            if (this.getPhoneNumber() != null) {
                data.set("phoneNumber", om.valueToTree(this.getPhoneNumber()));
            }
            if (this.getProject() != null) {
                data.set("project", om.valueToTree(this.getProject()));
            }
            if (this.getRemark() != null) {
                data.set("remark", om.valueToTree(this.getRemark()));
            }
            if (this.getTable() != null) {
                data.set("table", om.valueToTree(this.getTable()));
            }
            if (this.getText() != null) {
                data.set("text", om.valueToTree(this.getText()));
            }
            if (this.getUri() != null) {
                data.set("uri", om.valueToTree(this.getUri()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-paiplugin.GroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            GroupProps.Jsii$Proxy that = (GroupProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (!source.equals(that.source)) return false;
            if (this.algorithm != null ? !this.algorithm.equals(that.algorithm) : that.algorithm != null) return false;
            if (this.column != null ? !this.column.equals(that.column) : that.column != null) return false;
            if (this.filter != null ? !this.filter.equals(that.filter) : that.filter != null) return false;
            if (this.inferenceJobId != null ? !this.inferenceJobId.equals(that.inferenceJobId) : that.inferenceJobId != null) return false;
            if (this.phoneNumber != null ? !this.phoneNumber.equals(that.phoneNumber) : that.phoneNumber != null) return false;
            if (this.project != null ? !this.project.equals(that.project) : that.project != null) return false;
            if (this.remark != null ? !this.remark.equals(that.remark) : that.remark != null) return false;
            if (this.table != null ? !this.table.equals(that.table) : that.table != null) return false;
            if (this.text != null ? !this.text.equals(that.text) : that.text != null) return false;
            return this.uri != null ? this.uri.equals(that.uri) : that.uri == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.source.hashCode());
            result = 31 * result + (this.algorithm != null ? this.algorithm.hashCode() : 0);
            result = 31 * result + (this.column != null ? this.column.hashCode() : 0);
            result = 31 * result + (this.filter != null ? this.filter.hashCode() : 0);
            result = 31 * result + (this.inferenceJobId != null ? this.inferenceJobId.hashCode() : 0);
            result = 31 * result + (this.phoneNumber != null ? this.phoneNumber.hashCode() : 0);
            result = 31 * result + (this.project != null ? this.project.hashCode() : 0);
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            result = 31 * result + (this.table != null ? this.table.hashCode() : 0);
            result = 31 * result + (this.text != null ? this.text.hashCode() : 0);
            result = 31 * result + (this.uri != null ? this.uri.hashCode() : 0);
            return result;
        }
    }
}
